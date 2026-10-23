import type { ReactNode } from "react";

// The workflow from "How I ship software with a team of AI agents", drawn in
// HTML so it stays readable at any width and follows the site's theme. The
// same diagram as one image is linked from its caption.

type Card = { title: string; text: ReactNode; decide?: boolean };
// `next` labels the arrow from a step to the one after it.
type Step = Card & { next?: string };

const PNG = "/blog/how-i-ship-software-with-ai-agents/agentic-workflow.png";

function Decide() {
  return <span className="workflow-decide">You decide</span>;
}

function Cards({ cards, wide }: { cards: Card[]; wide?: boolean }) {
  return (
    <ul
      className={wide ? "workflow-cards workflow-cards-wide" : "workflow-cards"}
    >
      {cards.map((card) => (
        <li key={card.title} className="workflow-card">
          <strong>{card.title}</strong>
          <span>{card.text}</span>
          {card.decide && <Decide />}
        </li>
      ))}
    </ul>
  );
}

function Flow({ steps, result }: { steps: Step[]; result?: string }) {
  return (
    <ol className="workflow-flow">
      {steps.map((step) => (
        <li key={step.title} className="workflow-step" data-next={step.next}>
          <strong>{step.title}</strong>
          <span>
            {step.text}
            {step.decide && <Decide />}
          </span>
        </li>
      ))}
      {result && <li className="workflow-result">{result}</li>}
    </ol>
  );
}

const STAGES: { title: string; lead: string; body: ReactNode }[] = [
  {
    title: "Asks come in",
    lead: "Anyone can ask, from anywhere, at any hour.",
    body: (
      <Cards
        cards={[
          {
            title: "Me",
            text: (
              <>
                I type <code>/work</code> and the ask, from my laptop or phone
              </>
            ),
          },
          {
            title: "My team",
            text: "Tag the agent bot in Slack or DM it, in plain words",
          },
          {
            title: "GitHub issues",
            text: "Any issue given the agent label starts one",
          },
          {
            title: "Production alarms",
            text: "Each opens an incident with its logs, and an agent starts debugging",
          },
          {
            title: "Slack sweep",
            text: "Every 6 hours, an agent catches asks nobody tagged it on",
          },
        ]}
      />
    ),
  },
  {
    title: "Triage",
    lead: "A dispatcher agent reads the ask, its thread and any screenshots, then picks one of four paths.",
    body: (
      <Cards
        wide
        cards={[
          {
            title: "A question",
            text: "Answered in the thread, straight from the code",
          },
          {
            title: "A clear, small ask",
            text: "Filed as a task and started on the spot",
          },
          {
            title: "A big or unclear ask",
            text: "It asks follow-up questions, or sends me a ready plan to approve",
            decide: true,
          },
          {
            title: "An iOS app task",
            text: "Sent to an always-on Mac, which can build the app and test it in the iOS simulator",
          },
        ]}
      />
    ),
  },
  {
    title: "Task list",
    lead: "Every piece of work, tracked in one place.",
    body: (
      <p className="workflow-note">
        One GitHub issue per task: the ask, a &ldquo;Done when&rdquo; line and
        its state. Duplicates are caught, and a task can wait for another to
        land.
      </p>
    ),
  },
  {
    title: "Build loop",
    lead: "Each task gets its own agents and workspace: the cloud for the backend and data engine, an always-on Mac for the iOS app.",
    body: (
      <Flow
        steps={[
          {
            title: "Plan",
            text: "A planner splits a goal into tasks, each with a clear check. Big goals wait for my go.",
            decide: true,
          },
          {
            title: "Tests first",
            text: "A separate agent writes failing tests. The builder can’t touch them, so it can’t pass by weakening them.",
          },
          {
            title: "Build",
            text: "A builder agent writes the change on its own branch, following the rules for that part of the code.",
          },
          {
            title: "Prove",
            text: "It runs the full live check, and a hook won’t let it stop until the proof passes. Stuck? It DMs me why.",
          },
          {
            title: "Fresh review",
            text: "A brand-new agent, with no memory of the build, checks the diff against the original ask.",
          },
        ]}
        result="A pull request, with its proof and review"
      />
    ),
  },
  {
    title: "Merge & release",
    lead: "Green means merged, and merged means live on staging.",
    body: (
      <Flow
        steps={[
          {
            title: "CI",
            text: "Typecheck and 5,000+ tests on every pull request. If it fails, the agent fixes it, twice at most.",
            next: "all green",
          },
          {
            title: "Merge bot",
            text: "Merges on its own once proven and reviewed. Changes to the agents’ own rules are held for me.",
            next: "every merge",
          },
          {
            title: "Staging",
            text: "Every merge goes live on staging, gets health-checked, and rolls itself back if it breaks.",
            next: "my call",
          },
          {
            title: "Production",
            text: "Ships only when I say so, and so do App Store releases.",
            decide: true,
          },
        ]}
      />
    ),
  },
  {
    title: "Report back & learn",
    lead: "Every correction makes the system smarter.",
    body: (
      <>
        <Cards
          cards={[
            {
              title: "Reply to the asker",
              text: "Their thread gets the pull request link, then a check mark when it merges",
            },
            {
              title: "Morning summary",
              text: "A DM every morning: what started, what merged, and what’s waiting on me",
            },
            {
              title: "Weekly report",
              text: "Every Monday it fixes stale docs and scores the agents on a benchmark of real tasks",
            },
            {
              title: "Corrections",
              text: "Each correction I make becomes a test, hook or rule, so the mistake gets caught next time",
            },
            {
              title: "Nightly bug hunt",
              text: "At 2 a.m. an agent runs the live check, reads the day’s errors and files what it finds",
            },
          ]}
        />
        <p className="workflow-loop">
          What the bug hunt finds goes back to the task list (3) as new tasks.
        </p>
      </>
    ),
  },
];

export default function AgenticWorkflowDiagram() {
  return (
    <figure className="workflow">
      <p className="workflow-legend">
        <Decide /> marks where I step in. AI agents do everything else.
      </p>
      <ol className="workflow-stages">
        {STAGES.map((stage) => (
          <li key={stage.title} className="workflow-stage">
            <p className="workflow-stage-title">
              <strong>{stage.title}</strong> {stage.lead}
            </p>
            {stage.body}
          </li>
        ))}
      </ol>
      <p className="workflow-guardrails">
        <strong>Guardrails.</strong> Agents never push to main, release to
        production, spend money, publish, or answer product and priority
        questions. Code that touches money must prove itself on a testnet or
        sandbox first.
      </p>
      <figcaption>
        Built on Claude Code, GitHub Actions, Slack and AWS.{" "}
        <a href={PNG}>Download it as one image</a>
      </figcaption>
    </figure>
  );
}
