---
title: "How I ship software with a team of AI agents"
description: "A Slack message, a GitHub issue or a production alarm becomes a planned, tested, reviewed and released change, around the clock. Here is the system, stage by stage, and the few places I still step in."
date: "2026-10-23"
readTime: "6 min read"
tags: ["AI Agents", "Claude Code", "Developer Productivity", "Engineering"]
image: "/blog/how-i-ship-software-with-ai-agents/preview.png"
imageAlt: "The title and first stage of my agentic workflow diagram: asks come in from me, my team, GitHub issues, production alarms and a Slack sweep"
---

# How I ship software with a team of AI agents

A teammate tags the agent bot in Slack and asks for a change in plain words. If the ask is clear and small, an agent files it as a task and starts on the spot.

From there, other agents write the tests, build the change, prove it works and review it. It merges on its own and goes live on staging. The median task goes from filed to merged in about an hour.

I step in only where a human should: approving big or unclear work, releasing to production, and changing the agents' own rules.

Here is the whole workflow on one page. The rest of this post walks through it, stage by stage.

[![Flow diagram of my agentic development workflow in six stages. 1, asks come in from me, my team, GitHub issues, production alarms and a Slack sweep. 2, a dispatcher agent triages each ask into a question, a clear small ask, a big or unclear ask, or an iOS app task. 3, one GitHub issue per task. 4, a build loop of plan, tests first, build, prove and fresh review, ending in a pull request. 5, merge and release through CI, a merge bot, staging and production. 6, report back and learn, with a nightly bug hunt that feeds new tasks back to the task list. Badges mark where I decide: big or unclear asks, big plans and production releases. Guardrails and the numbers sit at the bottom.](/blog/how-i-ship-software-with-ai-agents/agentic-workflow-web.png)](/blog/how-i-ship-software-with-ai-agents/agentic-workflow.png)

_The full workflow on one page. [Open the full-size diagram](/blog/how-i-ship-software-with-ai-agents/agentic-workflow.png) to zoom in._

## 1. Asks come in

Anyone can ask, from anywhere, at any hour. There are five ways in:

- **Me.** I type `/work` and the ask, from my laptop or my phone.
- **My team.** They tag the agent bot in Slack, or DM it, in plain words.
- **GitHub issues.** Any issue given the agent label starts one.
- **Production alarms.** Each alarm opens an incident with its logs, and an agent starts debugging.
- **A Slack sweep.** Every 6 hours, an agent sweeps Slack for asks nobody tagged it on.

My team doesn't need a special format. Plain words are enough.

## 2. Triage

A dispatcher agent reads the ask, its thread and any screenshots. Then it picks one of four paths:

- **A question** is answered in the thread, from the code.
- **A clear, small ask** is filed as a task and started on the spot.
- **A big or unclear ask** gets follow-up questions, or a ready plan sent to me to approve.
- **An iOS app task** goes to an always-on Mac that can build the app and test it in the iOS simulator. Cloud machines can't run Xcode.

Not every ask needs code. Some only need an answer, and it goes straight back to the thread.

## 3. Task list

Every task is one GitHub issue. It holds the ask, a "Done when" line and its state.

Duplicates are caught, and a task can wait for another to land.

## 4. Build loop

Each task gets its own agents and an isolated workspace: the cloud for the backend and the data engine, the always-on Mac for the iOS app. Five steps run in order.

- **Plan.** A planner splits a goal into tasks, each with a clear check. Big goals wait for my go.
- **Tests first.** A separate agent writes failing tests. The builder can't edit them, so it can't pass by weakening them.
- **Build.** A builder agent writes the change on its own branch, following the rules for that part of the code.
- **Prove.** It runs the full live check, and a hook won't let it stop until the proof passes. If it's stuck, it DMs me why.
- **Fresh review.** A brand-new agent, with no memory of the build, checks the diff against the original ask.

The task ends as a pull request that carries its proof and its review.

## 5. Merge and release

Green means merged, and merged means live on staging.

- **CI.** Every pull request gets a typecheck plus 5,000+ tests. If CI fails, the agent fixes it, twice at most.
- **Merge bot.** It merges on its own once the change is proven and reviewed. Changes to the agents' own rules are held for me.
- **Staging.** Every merge goes live on staging, gets health-checked, and rolls itself back if it breaks.
- **Production.** Production and App Store releases ship only when I say so.

## 6. Report back and learn

- **The asker hears back.** Their thread gets the PR link, then a check mark when it merges.
- **Morning summary.** A DM each morning tells me what started, what merged and what's waiting on me.
- **Weekly report.** Every Monday, a report fixes stale docs and scores the agents on a benchmark of real tasks.
- **Corrections stick.** Each correction I make becomes a test, a hook or a rule, so the mistake gets caught next time.
- **Nightly bug hunt.** At 2 a.m., an agent runs the live check, reads the day's errors and files new tasks.

Those new tasks land back on the task list, and the loop starts again.

## Where I step in

I make three kinds of decisions:

- Approving big or unclear asks, and big plans.
- Production and App Store releases.
- Changes to the agents' own rules.

The agents do everything else.

## Guardrails

Agents never:

- push to main
- release to production
- spend money
- publish
- answer product or priority questions

Code that touches money must prove itself on a testnet or sandbox first.

## By the numbers

- **20+** tasks handed to agents every day
- **50+** PRs merged on a busy day
- **~1 hour** median from task to merged
- **~50** staging releases on a busy day
- **5,000+** automated tests on every change

## What changed for me

Work doesn't wait for me to be at my desk. Asks come in at any hour, from anyone, and clear ones start right away.

My part is the decisions only I should make: what to build when an ask is big or unclear, when to release to production, and how the agents themselves work.

The work reports back on its own. The asker's thread gets a link and then a check mark, and a morning DM tells me what's waiting on me.

## Lessons you can reuse

You don't need my exact setup to borrow the ideas.

1. **Write down what "done" means.** Every task carries a "Done when" line, and every planned task has a clear check. An agent can only prove what it can check.
2. **Keep the test writer and the builder apart.** If the builder can edit the tests, it can pass by weakening them.
3. **Don't let the agent decide it's finished.** A hook keeps it working until the proof passes. When it's stuck, it tells you why.
4. **Review with fresh eyes.** A reviewer with no memory of the build checks the diff against the original ask.
5. **Turn every correction into a check.** A test, a hook or a rule means the same mistake gets caught next time.
6. **Draw hard lines.** Decide what agents never do, and keep changes to their rules in human hands.
7. **Take asks where people already make them.** A Slack message, a GitHub issue or an alarm is enough to start.

## The tools

The system is built on Claude Code, GitHub Actions, Slack and AWS, plus an always-on Mac for the iOS app.
