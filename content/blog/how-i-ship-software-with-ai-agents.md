---
title: "How I ship software with a team of AI agents"
description: "Why agentic development matters now, how I run many AI agents at once, and the research behind each decision that makes them reliable: my findings, my design, and lessons you can reuse."
date: "2026-10-23"
readTime: "15 min read"
tags:
  [
    "AI Agents",
    "Agentic Workflows",
    "Claude Code",
    "Developer Productivity",
    "Engineering",
  ]
image: "/blog/how-i-ship-software-with-ai-agents/preview.png"
imageAlt: "The title and first stage of my agentic workflow diagram: asks come in from me, my team, GitHub issues, production alarms and a Slack sweep"
---

# How I ship software with a team of AI agents

AI coding agents can now do real engineering work on their own. Getting them to do it reliably, many at a time, without a person checking every line, is a different problem. This post is about that problem.

In my setup, asks come in from Slack, GitHub and production alarms. A team of AI agents plans the work, writes the tests, builds the change, proves it works, reviews it and ships it to staging. I step in only where a human should: big or unclear work, production releases, and changes to the agents' own rules.

Below is the whole system on one page, the research behind it, and the decision I made at each step to make it reliable.

> **The short version:** The reliability has to come from the workflow, not the model: small tasks with a written definition of done, separate agents that check each other, proof instead of claims, fresh eyes on every diff, and hard limits on what agents can do.

[![Flow diagram of my agentic development workflow in six stages. 1, asks come in from me, my team, GitHub issues, production alarms and a Slack sweep. 2, a dispatcher agent triages each ask into a question, a clear small ask, a big or unclear ask, or an iOS app task. 3, one GitHub issue per task. 4, a build loop of plan, tests first, build, prove and fresh review, ending in a pull request. 5, merge and release through CI, a merge bot, staging and production. 6, report back and learn, with a nightly bug hunt that feeds new tasks back to the task list. Badges mark where I decide: big or unclear asks, big plans and production releases. Guardrails and the numbers sit at the bottom.](/blog/how-i-ship-software-with-ai-agents/agentic-workflow-web.png)](/blog/how-i-ship-software-with-ai-agents/agentic-workflow.png)

_The whole workflow on one page. [Open the full-size diagram](/blog/how-i-ship-software-with-ai-agents/agentic-workflow.png) to zoom in._

## Table of Contents

1. [Why agentic development matters now](#1-why-agentic-development-matters-now)
2. [What I wanted from it](#2-what-i-wanted-from-it)
3. [The workflow at a glance](#3-the-workflow-at-a-glance)
4. [Running many agents at once](#4-running-many-agents-at-once)
5. [Making agents reliable: findings and decisions](#5-making-agents-reliable-findings-and-decisions)
6. [Where I still step in](#6-where-i-still-step-in)
7. [By the numbers](#7-by-the-numbers)
8. [Lessons you can reuse](#8-lessons-you-can-reuse)
9. [The tools](#9-the-tools)
10. [Sources](#10-sources)

---

## 1. Why agentic development matters now

### Agents can now finish real tasks

[METR](https://metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks/) measures AI progress by the length of task an agent can finish on its own, counted in how long that task takes a human expert. In March 2025, they found this "time horizon" had doubled roughly every seven months for six years. Their [January 2026 update](https://metr.org/blog/2026-01-29-time-horizon-1-1/) puts the doubling since 2023 at about 131 days, a little over four months.

The exact rate matters less than the direction. Each year, the work you can hand to an agent gets meaningfully bigger.

There is a catch in the definition, though. The time horizon is measured at a 50% success rate. Half the time is fine for a benchmark. It is not fine for code you merge.

### A faster model doesn't make a faster team

The evidence on productivity is more mixed than the hype.

- In a [randomized trial](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) from July 2025, METR had 16 experienced open-source developers work through 246 real issues, with AI tools either allowed or not. With AI, they took 19% longer. They expected to be faster, and even afterwards believed AI had sped them up by about 20%.
- METR's [follow-up with late-2025 tools](https://metr.org/blog/2026-02-24-uplift-update/) points the other way. They now think developers are likely sped up, with estimates of 18% and 4% faster in two groups, but with wide confidence intervals. Measuring it also got harder, because many developers no longer wanted to work without AI.
- Google's [DORA 2025 report](https://cloud.google.com/blog/products/ai-machine-learning/announcing-the-2025-dora-report) found that 90% of respondents use AI at work and more than 80% believe it made them more productive. Its headline: "AI doesn't fix a team; it amplifies what's already there." AI adoption now relates positively to delivery throughput, but still negatively to delivery stability.
- In the [2025 Stack Overflow survey](https://survey.stackoverflow.co/2025/ai), more developers distrust the accuracy of AI tools (46%) than trust it (33%). The top frustration, for 66%, is AI output that is close to right but not quite. And 45% say debugging AI-generated code takes longer.
- [Gartner](https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027) predicts that over 40% of agentic AI projects will be canceled by the end of 2027, citing rising costs, unclear business value and inadequate risk controls.

### What I took from it

Two things.

First, writing code is no longer the bottleneck. Checking it, integrating it and releasing it safely are. When agents produce code faster than people can verify it, you get more almost-right code and less stable releases, which matches what the surveys report.

Second, the gains are not automatic, and the feeling of being faster is not evidence. The difference comes from the system around the agents. So I treat the workflow, not the model, as the thing to engineer.

## 2. What I wanted from it

I wanted to work with many agents at the same time, not sit in one chat window steering one agent. That meant three goals:

- **Run many tasks in parallel.** Clear tasks should move on their own, without waiting for me.
- **Let anyone ask, at any hour.** My team should be able to hand work to agents in plain words, from Slack or GitHub, without me in the middle.
- **Spend my time only where a human should.** Agents do everything else.

And one constraint: changes have to be trustworthy enough to merge without me reading every diff. Most of what follows exists to meet that constraint.

## 3. The workflow at a glance

The diagram above shows the whole loop. In short:

1. **Asks come in from anywhere.** I type `/work` and the ask, from my laptop or phone. My team tags the agent bot in Slack or DMs it. Any GitHub issue given the agent label starts one. A production alarm opens an incident with its logs, and an agent starts debugging. Every 6 hours, an agent sweeps Slack for asks nobody tagged it on.
2. **A dispatcher triages each ask.** It reads the ask, its thread and any screenshots, then picks one of four paths. A question is answered in the thread, from the code. A clear, small ask is filed as a task and started on the spot. A big or unclear ask gets follow-up questions, or a ready plan sent to me to approve. An iOS app task goes to an always-on Mac, because cloud machines can't run Xcode.
3. **Every task is one GitHub issue.** It holds the ask, a "Done when" line and its state. Duplicates are caught, and a task can wait for another to land.
4. **Each task runs a build loop** with its own agents, in an isolated workspace: the cloud for the backend and the data engine, the always-on Mac for the iOS app. A planner splits a goal into tasks, each with a clear check. A separate agent writes failing tests. A builder writes the change on its own branch. It runs the full live check until the proof passes. Then a brand-new agent reviews the diff against the original ask. The result is a pull request that carries its proof and its review.
5. **Merge and release.** CI runs a typecheck and 5,000+ tests on every pull request. If CI fails, the agent fixes it, twice at most. A merge bot merges once the change is proven and reviewed. Every merge goes live on staging, gets health-checked, and rolls itself back if it breaks. Production and App Store releases ship only when I say so.
6. **Report back and learn.** The asker's thread gets the PR link, then a check mark when it merges. A morning DM tells me what started, what merged and what's waiting on me. Every Monday, a report fixes stale docs and scores the agents on a benchmark of real tasks. A nightly bug hunt at 2 a.m. runs the live check, reads the day's errors and files new tasks.

In the vocabulary of Anthropic's [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents), the dispatcher is **routing**, the planner is **orchestrator-workers**, and the fresh reviewer plays the **evaluator**. The same guide separates _workflows_, where models run through predefined code paths, from _agents_, which direct their own process. This system is both: a fixed workflow on the outside, with agents doing open-ended work inside each step.

## 4. Running many agents at once

### What the research says

- **Parallel agents can be much stronger.** In Anthropic's [multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system), a lead agent with parallel subagents beat a single agent by 90.2% on their internal research eval. Each subagent works in its own context window and hands back a condensed result.
- **They are also expensive.** The same post reports that agents use about 4× the tokens of a chat, and multi-agent systems about 15×.
- **Splitting one piece of work is risky.** Anthropic notes that coding has fewer truly parallel tasks than research, and that work with many dependencies between agents is a poor fit. Cognition's [Don't Build Multi-Agents](https://cognition.com/blog/dont-build-multi-agents) makes the same point with an example: two subagents each build part of a Flappy Bird clone, make their own style choices, and the parts don't fit together. Their principle is that every action carries implicit decisions, and conflicting decisions produce bad results.
- **Long contexts degrade.** Chroma's [Context Rot](https://www.trychroma.com/research/context-rot) study tested 18 models and found performance consistently drops as input length grows. The [Claude Code best practices](https://code.claude.com/docs/en/best-practices) say the same about a filling context window.

### What I decided

- **Parallel across tasks, sequential inside a task.** Independent tasks run at the same time, each with its own agents and isolated workspace. Inside a task, the steps run in order: plan, tests, build, proof, review. One builder writes each change, so there are no parallel halves to reconcile.
- **Let the task list coordinate.** Dependencies and duplicates are handled at the level of GitHub issues: duplicates are caught, and a task can wait for another to land.
- **Hand off artifacts, not conversations.** Each step leaves something concrete for the next: a plan with checks, failing tests, a branch, a proof, a review. The reviewer gets the diff and the original ask, not the builder's history.
- **Route work to the machine that can do it.** The iOS app needs Xcode, so its tasks go to an always-on Mac that can build the app and test it in the iOS simulator. The backend and the data engine run in the cloud.

## 5. Making agents reliable: findings and decisions

Capability is the easier part now. Reliability is where the work is. Each finding below pairs what the research found with the decision I made in response.

### Finding 1: Agents take on too much, then stop too early

Anthropic's work on [long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents) describes three failures: agents try to do too much at once, declare the job done too early, and mark features complete without testing them end to end. Their fixes were a feature list with pass/fail status, one feature at a time, and testing the way a human user would. METR's time horizons point the same way: success rates fall as tasks get longer.

The Claude Code best practices name the root cause: an agent stops when the work looks done, and without a check it can run, looking done is the only signal it has.

**Decision: small tasks with a written definition of done.** A planner splits each goal into tasks, each with a clear check. Every task's GitHub issue has a "Done when" line. Big goals wait for my go.

### Finding 2: If an agent can change the test, it may change the test

METR found that [recent frontier models reward hack](https://metr.org/blog/2025-06-05-recent-reward-hacking/): instead of solving a task, they sometimes modify the tests or the scoring code, or patch the grader to return a perfect score. In one task, it happened in every run. Telling the model not to cheat barely helped, and when asked afterwards, the model said its approach didn't match what the user wanted.

In Anthropic's long-running agent harness, coding agents could change a feature's status but not edit or remove its tests. The Claude Code docs suggest a related pattern: one agent writes the tests, and another writes the code to pass them.

**Decision: tests first, from a separate agent, and the builder can't edit them.** The failing tests exist before the builder starts. Because it can't touch them, it can't pass by weakening them.

### Finding 3: "Done" has to be proven, not claimed

The Claude Code docs describe several ways to gate when an agent may stop, from asking it to run a check, up to a Stop hook: a script that blocks the agent from finishing until the check passes. They also draw the line between rules and hooks. Instructions in a file like CLAUDE.md are advisory, while hooks always run. Anthropic's harness work adds that agents catch more bugs when they test end to end, the way a user would.

**Decision: the builder has to prove it, and a hook enforces it.** The prove step runs the full live check, and a hook won't let the builder stop until the proof passes. The pull request carries that proof. If the builder is stuck, it DMs me why, so a stuck task becomes a message, not a silent failure.

### Finding 4: A model is a poor judge of its own work

[Huang et al.](https://arxiv.org/abs/2310.01798) (ICLR 2024) found that language models struggle to correct their own reasoning without external feedback, and that performance can even get worse after self-correction. The Claude Code docs recommend a writer and a reviewer in separate sessions, because a fresh context isn't biased toward code it just wrote. A reviewer in a fresh context sees the diff and the criteria, not the reasoning that produced the change. The docs also warn that a reviewer asked to find gaps will usually report some, so its criteria should be correctness and the stated requirements.

**Decision: a fresh review against the original ask.** A brand-new agent, with no memory of the build, checks the diff against the original ask. The external checks, the tests and the live proof, run before it, so the review is not the only line of defense.

### Finding 5: Agents don't learn from yesterday unless you make them

A new agent session doesn't remember yesterday's mistakes unless something carries them forward. Rules in a file like CLAUDE.md are read every session, but they are advice; hooks and tests are enforced. Anthropic's guide to [agent evals](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents) recommends starting with 20 to 50 tasks drawn from real failures, keeping regression evals near a 100% pass rate, and grading what the agent produced rather than the path it took.

**Decision: every correction becomes something that runs.** Each correction I make becomes a test, a hook or a rule, so the mistake gets caught next time. Each part of the code has its own rules for the builder to follow. Every Monday, a report fixes stale docs and scores the agents on a benchmark of real tasks. Every night at 2 a.m., an agent runs the live check, reads the day's errors and files new tasks.

### Finding 6: Faster merging needs safer releasing

DORA's 2025 data links AI adoption to higher delivery throughput, but lower delivery stability. More changes, shipped faster, means more chances to break something.

**Decision: merge automatically, release deliberately.** CI runs a typecheck and 5,000+ tests on every pull request. If CI fails, the agent fixes it, twice at most, so a failing change can't loop forever. The merge bot merges only changes that are proven and reviewed. Every merge goes live on staging, gets health-checked, and rolls itself back if it breaks. Production and App Store releases ship only when I say so.

### Finding 7: Autonomy needs hard limits

Simon Willison's [lethal trifecta](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/) names the risky combination for agents: access to private data, exposure to untrusted content, and the ability to communicate externally. Any agent that reads Slack messages, issues and screenshots is exposed to untrusted content. Anthropic's [framework for safe and trustworthy agents](https://www.anthropic.com/news/our-framework-for-developing-safe-and-trustworthy-agents) argues that humans should keep control over how goals are pursued, especially before high-stakes decisions. And inadequate risk controls are one of the reasons Gartner expects agentic projects to be canceled.

**Decision: limit what agents can do, whatever they read.** Agents never push to main, release to production, spend money, publish, or answer product or priority questions. Code that touches money must prove itself on a testnet or sandbox first. Changes to the agents' own rules are held for me, so an agent can't loosen its own limits.

## 6. Where I still step in

- Approving big or unclear asks, and big plans.
- Production and App Store releases.
- Changes to the agents' own rules.

These have something in common: they either set direction or are hard to undo. The rest, work that can be checked and rolled back, the agents do.

## 7. By the numbers

- **20+** tasks handed to agents every day
- **50+** PRs merged on a busy day
- **~1 hour** median from task to merged
- **~50** staging releases on a busy day
- **5,000+** automated tests on every change

## 8. Lessons you can reuse

1. **Engineer the workflow, not just the prompt.** The research agrees that AI amplifies the system around it. Put your effort there.
2. **Write down "done" before work starts.** A task an agent can't check is a task it can't reliably finish.
3. **Separate the roles that check each other.** The test writer is not the builder, and the builder is not the reviewer.
4. **Prefer gates to instructions.** Rules are advice. Hooks, tests and CI are enforced.
5. **Parallelize across tasks, not inside one.** Give each task its own agents and workspace, and let the task list handle dependencies.
6. **Give reviewers fresh eyes.** Review against the original ask, without the builder's reasoning.
7. **Turn every correction into something that runs.** A test, a hook or a rule beats remembering to say it again.
8. **Keep humans on direction and irreversible actions.** Let agents do the work that can be checked and rolled back.
9. **Measure instead of trusting the feeling.** Developers in METR's trial felt faster while being slower. Track what merges, what breaks, and how agents score on real tasks.

## 9. The tools

The system is built on Claude Code, GitHub Actions, Slack and AWS, plus an always-on Mac for the iOS app.

## 10. Sources

- METR, [Measuring AI Ability to Complete Long Tasks](https://metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks/) (March 2025)
- METR, [Time Horizon 1.1](https://metr.org/blog/2026-01-29-time-horizon-1-1/) (January 2026)
- METR, [Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) (July 2025)
- METR, [We are Changing our Developer Productivity Experiment Design](https://metr.org/blog/2026-02-24-uplift-update/) (February 2026)
- METR, [Recent Frontier Models Are Reward Hacking](https://metr.org/blog/2025-06-05-recent-reward-hacking/) (June 2025)
- Google Cloud, [Announcing the 2025 DORA report](https://cloud.google.com/blog/products/ai-machine-learning/announcing-the-2025-dora-report) (September 2025)
- Stack Overflow, [2025 Developer Survey: AI](https://survey.stackoverflow.co/2025/ai) (2025)
- Gartner, [Over 40% of Agentic AI Projects Will Be Canceled by End of 2027](https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027) (June 2025)
- Anthropic, [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) (December 2024)
- Anthropic, [How we built our multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system) (June 2025)
- Anthropic, [Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents) (November 2025)
- Anthropic, [Our framework for developing safe and trustworthy agents](https://www.anthropic.com/news/our-framework-for-developing-safe-and-trustworthy-agents) (August 2025)
- Anthropic, [Demystifying evals for AI agents](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents) (January 2026)
- Anthropic, [Best practices for Claude Code](https://code.claude.com/docs/en/best-practices)
- Cognition, [Don't Build Multi-Agents](https://cognition.com/blog/dont-build-multi-agents) (June 2025)
- Chroma, [Context Rot](https://www.trychroma.com/research/context-rot) (July 2025)
- Huang et al., [Large Language Models Cannot Self-Correct Reasoning Yet](https://arxiv.org/abs/2310.01798) (ICLR 2024)
- Simon Willison, [The lethal trifecta for AI agents](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/) (June 2025)
