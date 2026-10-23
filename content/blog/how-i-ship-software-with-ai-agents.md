---
title: "How I ship software with a team of AI agents"
description: "How I run a team of AI agents that plans, tests, builds, reviews and ships my code, what I borrowed from how OpenAI, Anthropic, Meta, Cursor and the Grok Bot team ship with agents, and the decision behind each step."
date: "2026-10-23"
readTime: "14 min read"
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

I want to become a 10x engineer. More precisely, I want to 100x my development workflow: ship quickly, and ship reliably, at the same time.

AI coding agents make that goal more realistic than it has ever been, because they can now do real engineering work on their own. But getting them to do it reliably, many at a time, without a person checking every line, is a different problem.

To solve it, I studied how the teams that build these tools ship with them: Lauren Tan's talk on shipping thousands of pull requests a month with Grok Bot, OpenAI's harness engineering, and engineering write-ups from Anthropic, Meta, Cursor, Stripe, Spotify and Vercel. Then I built my own workflow from what I learned.

In my setup, asks come in from Slack, GitHub and production alarms. A team of AI agents plans the work, writes the tests, builds the change, proves it works, reviews it and ships it to staging. I step in only where a human should: big or unclear work, production releases, and changes to the agents' own rules.

This post shares all of it: [the whole system on one page](#3-the-workflow-at-a-glance), what I borrowed from each team, and the decision I made at each step to make it reliable.

> **The short version:** The reliability has to come from the workflow, not the model: small tasks with a written definition of done, separate agents that check each other, proof instead of claims, fresh eyes on every diff, and hard limits on what agents can do.

## Table of Contents

1. [Why agentic development matters now](#1-why-agentic-development-matters-now)
2. [What I wanted from it](#2-what-i-wanted-from-it)
3. [The workflow at a glance](#3-the-workflow-at-a-glance)
4. [Running many agents at once](#4-running-many-agents-at-once)
5. [Making agents reliable: what I borrowed and what I decided](#5-making-agents-reliable-what-i-borrowed-and-what-i-decided)
6. [Where I still step in](#6-where-i-still-step-in)
7. [By the numbers](#7-by-the-numbers)
8. [Lessons you can reuse](#8-lessons-you-can-reuse)
9. [The tools](#9-the-tools)
10. [Sources](#10-sources)

---

## 1. Why agentic development matters now

### The teams building these tools already work this way

- **OpenAI.** In [harness engineering](https://openai.com/index/harness-engineering/) (February 2026), a team of three engineers driving Codex opened and merged about 1,500 pull requests into a product of roughly a million lines, with no hand-written code: about 3.5 pull requests per engineer per day. Throughput kept rising as the team grew to seven. Humans may review those pull requests, but aren't required to.
- **Anthropic.** As of May 2026, more than 80% of the code Anthropic merges is [written by Claude](https://www.anthropic.com/institute/recursive-self-improvement). In the second quarter of 2026, a typical engineer merged 8× as much code per day as in 2024, a measure Anthropic itself calls almost certainly an overstatement of the real productivity gain.
- **Grok Bot.** Lauren Tan, who works on Grok Bot, shipped 2,000 pull requests to production in a month. By the time she [posted the talk](https://x.com/poteto/status/2102050467505430555) in September 2026, it was 2,500.
- **Cursor.** More than 30% of the pull requests Cursor merges are [created by agents](https://cursor.com/blog/agent-computer-use) working on their own in cloud sandboxes.
- **Stripe.** Over 1,300 pull requests merged at Stripe each week are [entirely written by its agents](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents-part-2), which it calls minions. People still review them.

### What they have in common

None of them got there by waiting for a better model. Each built an environment around the agents: checks the agents can run themselves, isolated workspaces, short maps of the codebase, and hard limits.

They also share the same new bottleneck. Writing code is cheap now; trusting it is not. Lauren's talk is about exactly this: she was the bottleneck, and the way past it was trusting her agents' work without checking every line. OpenAI calls the same work harness engineering.

### What I took from it

The thing to engineer is the workflow around the agents, not the model inside it. More agents only help once their output can be trusted, so most of my system exists to produce that trust: proof that a change works, review by an agent that didn't write it, and limits that hold whatever an agent reads.

## 2. What I wanted from it

Lauren Tan ([@poteto](https://x.com/poteto)) works on Grok Bot at SpaceXAI, and worked at Cursor and Meta before. In her talk, she describes going from babysitting one to five agents to running many, and argues that what holds most people back is trust. She builds it in two ways:

- **Verification.** A skill that lets an agent run the app and collect evidence, made of a command-line tool plus a "feature map" of how a user reaches each feature.
- **A ladder of fixes.** When an agent makes a mistake, make it impossible in the code first. Then catch it with a lint rule or CI. Then write it into rules and skills. A style guide that only a human reviewer enforces comes last.

Her [pstack](https://github.com/cursor/plugins/tree/main/pstack) plugin packages these habits as playbooks. Grok Bot's [engineering guide](https://x.ai/bot/guides/grok-bot-for-engineering), written by Lingxi Li, shows the same ideas running unattended. Agents are launched with the proof they must bring back. Every 30 minutes, bots check pull requests for review findings, failing CI and merge conflicts. A pull request merges itself when the review is confident and the blast radius is low. And bots work through the night.

For me, a 10x workflow meant working with many agents at the same time, not sitting in one chat window steering one agent. That meant three goals:

- **Run many tasks in parallel.** Clear tasks should move on their own, without waiting for me.
- **Let anyone ask, at any hour.** My team should be able to hand work to agents in plain words, from Slack or GitHub, without me in the middle.
- **Spend my time only where a human should.** Agents do everything else.

And one constraint: changes have to be trustworthy enough to merge without me reading every diff. Most of what follows exists to meet that constraint.

## 3. The workflow at a glance

Every ask, from anyone, goes through the same six stages. The orange marks show the only places I step in.

```diagram
agentic-workflow
```

In the vocabulary of Anthropic's [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents), the dispatcher is **routing**, the planner is **orchestrator-workers**, and the fresh reviewer is the **evaluator**. The system is a fixed workflow on the outside, with agents doing open-ended work inside each step.

## 4. Running many agents at once

### What the teams found

- **Parallel agents can be much stronger, and cost more.** In Anthropic's [multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system), a lead agent with parallel subagents beat a single agent by 90.2% on an internal research eval, using about 15× the tokens of a chat. The same post warns that coding has fewer truly parallel tasks than research.
- **Agents that share one piece of work get in each other's way.** When Cursor [let 20 agents coordinate](https://cursor.com/blog/scaling-agents) through shared locks, they slowed to the throughput of two or three, mostly waiting on each other. Splitting the roles into planners, workers and a judge worked.
- **Each agent gets its own machine.** Every Stripe minion runs on its own pre-warmed devbox, ready in about 10 seconds and isolated from production and the internet.
- **People run several sessions at once.** Boris Cherny, who created Claude Code, [runs about five sessions](https://threadreaderapp.com/thread/2007179832300581177.html) in his terminal and five to ten more in the browser.

### What I decided

- **Parallel across tasks, sequential inside a task.** Independent tasks run at the same time, each with its own agents and isolated workspace. Inside a task, the steps run in order: plan, tests, build, proof, review. One builder writes each change, so there are no parallel halves to reconcile.
- **Let the task list coordinate.** Dependencies and duplicates are handled at the level of GitHub issues: duplicates are caught, and a task can wait for another to land.
- **Hand off artifacts, not conversations.** Each step leaves something concrete for the next: a plan with checks, failing tests, a branch, a proof, a review. The reviewer gets the diff and the original ask, not the builder's history.
- **Route work to the machine that can do it.** The iOS app needs Xcode, so its tasks go to an always-on Mac that can build the app and test it in the iOS simulator. The backend and the data engine run in the cloud.

## 5. Making agents reliable: what I borrowed and what I decided

Capability is the easier part now. Reliability is where the work is. Each section below pairs what another team found with the decision I made.

### 1. Agents take on too much, then stop too early

Anthropic's work on [long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents) names the failures: agents try to build everything at once, declare the job done too early, and mark features complete without testing them end to end. Their fix was a feature list with a pass/fail status for each feature, one feature at a time, and testing the way a user would.

**Decision: small tasks with a written definition of done.** A planner splits each goal into tasks, each with a clear check. Every task's GitHub issue has a "Done when" line. Big goals wait for my go.

### 2. If an agent can change the test, it may change the test

[ImpossibleBench](https://arxiv.org/abs/2510.20270) gave agents coding tasks that can't be solved honestly, because the tests contradict the spec. On one version, GPT-5 "passed" 76% of them anyway, by editing tests or special-casing them. On another, giving it a way to flag the task for a human cut its cheating from 54% to 9%.

Teams see the same thing in production. Spotify's [background coding agent](https://engineering.atspotify.com/2025/12/feedback-loops-background-coding-agents-part-3) uses a judge that compares each diff with the original prompt. It vetoes about a quarter of sessions, catching things like disabled flaky tests. Anthropic's long-running harness tells agents outright that removing or editing tests is unacceptable.

**Decision: tests first, from a separate agent, and the builder can't edit them.** The failing tests exist before the builder starts. Because it can't touch them, it can't pass by weakening them. And when it's stuck, it has an honest way out: it DMs me why, instead of faking a pass.

### 3. "Done" has to be proven, not claimed

Boris Cherny calls this his most important tip: give Claude a way to verify its work, which he says makes the result 2–3× better. Lauren's verification skills do it for an app. OpenAI made its app bootable in every git worktree, so Codex could launch and drive its own copy for each change.

The Claude Code [best practices](https://code.claude.com/docs/en/best-practices) explain how to enforce it. Instructions in CLAUDE.md are advisory, while hooks are deterministic. A Stop hook can block an agent from finishing until the check passes. Spotify uses exactly that to hold back pull requests until they pass.

**Decision: the builder has to prove it, and a hook enforces it.** The prove step runs the full live check, and a hook won't let the builder stop until the proof passes. The pull request carries that proof. If the builder is stuck, it DMs me why, so a stuck task becomes a message, not a silent failure.

### 4. A model is a poor judge of its own work

Anthropic found that agents [reliably skew positive](https://www.anthropic.com/engineering/harness-design-long-running-apps) when grading their own work, and that tuning a separate evaluator to be skeptical is far easier than making a builder critical of itself. The Claude Code docs recommend a writer and a reviewer in separate sessions, since a fresh context isn't biased toward code it just wrote. Lauren's pstack delegates the code, so the reviewer is never the author.

It pays off. After Anthropic added [automated code review](https://claude.com/blog/code-review), the share of its pull requests getting substantive review comments rose from 16% to 54%, with less than 1% of findings marked incorrect.

**Decision: a fresh review against the original ask.** A brand-new agent, with no memory of the build, checks the diff against the original ask. The tests and the live proof run before it, so the review is not the only line of defense.

### 5. Agents don't learn from yesterday unless you make them

A new agent session doesn't remember yesterday's mistakes. Lauren adds a warning: agents copy the patterns they see, so one workaround can spread through a codebase like a virus. Her answer is the ladder: fix each mistake at the strongest level that works.

- **OpenAI** enforces its architecture with custom lints whose error messages tell the agent how to fix the problem. Its AGENTS.md is a roughly 100-line map, and background agents open small pull requests that clean up drift.
- **Anthropic's** Claude Code team adds a line to its CLAUDE.md whenever Claude gets something wrong.
- **Meta** wrote [59 concise context files](https://engineering.fb.com/2026/04/06/developer-tools/how-meta-used-ai-to-map-tribal-knowledge-in-large-scale-data-pipelines/) for its data pipelines, cutting agents' tool calls by roughly 40% in early tests. Because context that decays is worse than none, automated jobs re-check them every few weeks.
- **Anthropic's** guide to [agent evals](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents) suggests starting with 20 to 50 tasks drawn from real failures.

**Decision: every correction becomes something that runs.** Each correction I make becomes a test, a hook or a rule, as strong as it can be made, so the mistake gets caught next time. Each part of the code has its own rules for the builder to follow. Every Monday, a report fixes stale docs and scores the agents on a benchmark of real tasks. Every night at 2 a.m., an agent runs the live check, reads the day's errors and files new tasks.

### 6. Faster merging needs safer releasing

OpenAI keeps its blocking merge gates minimal, and warns this would be irresponsible for a team that ships slowly. The others limit the risk in different ways:

- **Stripe** gives a change at most two rounds of CI before handing it back to a person.
- **Meta** scores each change's risk of causing an incident. That [Diff Risk Score](https://engineering.fb.com/2025/08/06/developer-tools/diff-risk-score-drs-ai-risk-aware-software-development-meta/) let it land more than 10,000 changes during a code freeze.
- **Grok Bot** merges only when the review is confident and the blast radius is low.
- **AWS's** guide to [hands-off deployments](https://builder.aws.com/content/3ErTKQOTKc5NIw031UePBPxTQ6I/automating-safe-hands-off-deployments) rolls back automatically when an alarm fires.

**Decision: merge automatically, release deliberately.** CI runs a typecheck and 5,000+ tests on every pull request. If CI fails, the agent fixes it, twice at most, so a failing change can't loop forever. The merge bot merges only changes that are proven and reviewed. Every merge goes live on staging, gets health-checked, and rolls itself back if it breaks. Production and App Store releases ship only when I say so.

### 7. Autonomy needs hard limits

Meta's [Agents Rule of Two](https://ai.meta.com/blog/practical-ai-agent-security/) says that within one session, an agent should have at most two of three things:

- it reads untrusted input;
- it can reach sensitive systems or private data;
- it can change state or communicate externally.

My agents read Slack messages, issues and screenshots, which are untrusted by definition. Vercel's [software factory](https://vercel.com/blog/building-a-software-factory-for-ai-sdk) treats every issue, pull request, comment and link as untrusted, and gives each agent only the secrets its task needs. Stripe runs its minions away from production data, so they need no permission prompts.

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

1. **Engineer the workflow, not just the prompt.** Every team above got its gains from the environment around the agents.
2. **Write down "done" before work starts.** A task an agent can't check is a task it can't reliably finish.
3. **Separate the roles that check each other.** The test writer is not the builder, and the builder is not the reviewer.
4. **Prefer gates to instructions.** Rules are advice. Hooks, tests and CI are enforced.
5. **Fix each mistake at the strongest level.** Make it impossible, then lint it, then write it down.
6. **Parallelize across tasks, not inside one.** Give each task its own agents and workspace, and let the task list handle dependencies.
7. **Give reviewers fresh eyes.** Review against the original ask, without the builder's reasoning.
8. **Give agents an honest way out.** An agent that can say "I'm stuck" is less likely to fake a pass.
9. **Keep humans on direction and irreversible actions.** Let agents do the work that can be checked and rolled back.

## 9. The tools

The system is built on Claude Code, GitHub Actions, Slack and AWS, plus an always-on Mac for the iOS app.

## 10. Sources

**Grok Bot**

- Lauren Tan, [how she shipped 2,500 PRs last month](https://x.com/poteto/status/2102050467505430555) (talk on X, September 2026)
- Lauren Tan, [pstack](https://github.com/cursor/plugins/tree/main/pstack) (Cursor plugin)
- Lingxi Li, [Grok Bot for engineering](https://x.ai/bot/guides/grok-bot-for-engineering) (September 2026)

**OpenAI**

- Ryan Lopopolo, [Harness engineering: leveraging Codex in an agent-first world](https://openai.com/index/harness-engineering/) (February 2026)

**Anthropic**

- [When AI builds itself](https://www.anthropic.com/institute/recursive-self-improvement) (2026)
- Boris Cherny, [how he uses Claude Code](https://threadreaderapp.com/thread/2007179832300581177.html) (thread, January 2026)
- [Best practices for Claude Code](https://code.claude.com/docs/en/best-practices) (accessed October 2026)
- [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) (December 2024)
- [How we built our multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system) (June 2025)
- [Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents) (November 2025)
- [Demystifying evals for AI agents](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents) (January 2026)
- [Code Review for Claude Code](https://claude.com/blog/code-review) (March 2026)
- [Harness design for long-running apps](https://www.anthropic.com/engineering/harness-design-long-running-apps) (March 2026)

**Meta**

- [Agents Rule of Two: a practical approach to AI agent security](https://ai.meta.com/blog/practical-ai-agent-security/) (October 2025)
- [Diff Risk Score: AI-driven risk-aware software development](https://engineering.fb.com/2025/08/06/developer-tools/diff-risk-score-drs-ai-risk-aware-software-development-meta/) (August 2025)
- [How Meta used AI to map tribal knowledge in large-scale data pipelines](https://engineering.fb.com/2026/04/06/developer-tools/how-meta-used-ai-to-map-tribal-knowledge-in-large-scale-data-pipelines/) (April 2026)

**Cursor**

- [Scaling long-running autonomous coding](https://cursor.com/blog/scaling-agents) (January 2026)
- [Cursor agents can now control their own computers](https://cursor.com/blog/agent-computer-use) (February 2026)

**Stripe, Spotify, Vercel and AWS**

- Stripe, [Minions: Stripe's one-shot, end-to-end coding agents, part 2](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents-part-2) (February 2026)
- Spotify, [Background coding agents: predictable results through strong feedback loops (Honk, part 3)](https://engineering.atspotify.com/2025/12/feedback-loops-background-coding-agents-part-3) (December 2025)
- Vercel, [Building a software factory for AI SDK](https://vercel.com/blog/building-a-software-factory-for-ai-sdk) (August 2026)
- AWS Builders' Library, [Automating safe, hands-off deployments](https://builder.aws.com/content/3ErTKQOTKc5NIw031UePBPxTQ6I/automating-safe-hands-off-deployments)

**Research**

- Zhong, Raghunathan and Carlini, [ImpossibleBench: measuring LLMs' propensity of exploiting test cases](https://arxiv.org/abs/2510.20270) (October 2025)
