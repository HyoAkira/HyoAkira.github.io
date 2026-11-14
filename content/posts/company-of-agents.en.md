---
title: "A Company of Agents"
date: 2026-11-12
draft: false
description: "Gemini 4 Carbon's /swarm, Meta's Conductor, and 1,000-agent proofs: the org chart is becoming the product."
tags: ["ai", "agents", "orchestration", "software"]
categories: ["Artificial Intelligence"]
slug: "company-of-agents"
image: "/images/posts/company-of-agents.png"
---

# A Company of Agents

On November 10, Google released **Gemini 4 Carbon**. The most interesting feature is not a benchmark score. It is `/swarm` in Google Antigravity, which turns a single prompt into a coordinated, trackable team of agents. Carbon takes the roles that need deep reasoning, such as architecture, coordination, and auditing. Faster, lighter models work in parallel isolated workspaces alongside **adversarial verifiers** that test every change.

The same week, Meta was reported to have acquired **Conductor**, a startup that runs software projects through teams of agents in parallel workspaces. Its agents come from labs such as Anthropic and OpenAI, not from Conductor itself. And Anthropic reported that a team of **1,000 agents** using Fable 5.2 completed the formalization of Fermat's Last Theorem in 30 hours.

The common thread: the product is no longer just the model. It is the **organization**.

## One prompt, one team

`/swarm` splits a prompt into roles: architect, implementer, auditor, verifier. Agents work in isolated workspaces in parallel, and every change is tested by someone other than the agent that wrote it. Google's examples are ambitious: an interactive Three.js exhibition of the Eiffel Tower's 1887–1889 construction from historical photos; a 906,000-triangle reconstruction of an office from seven planning PDFs and 206 extracted engineering views, built by a multi-agent team over ten overnight loops; 3D scenes completed with minimal prompting.

Most of this is possible not because one model writes better, but because of **division of labor**. Carbon is expensive and slow, so it is reserved for hard decisions. Routine work goes to cheaper models. Google says Carbon ranks first on CursorBench 4.0, Perplexity's WANDR, and Zapier's AutomationBench at more than 2× lower cost per task than the next best external model. The team is not just more capable. It is more **economic**.

## Why Meta bought Conductor

Conductor's product is agent teams that work on separate, compartmentalized parts of a project at the same time. Agents can run in the cloud, locally, or from a phone. The revealing detail is that Conductor did not build its own models. It used Anthropic and OpenAI models. Meta bought a company at the **orchestration layer**, not the model layer.

That tells you where value is moving. Models commoditize. Differentiation comes from how you organize agents, assign roles, verify output, and manage cost.

## 1,000 agents, 30 hours, one proof

Anthropic's Fermat experiment shows the scale. A team of 1,000 Fable 5.2 agents formalized the theorem in 30 hours with minimal human intervention. The agents built their own coordination methods, used one-third as many action tokens as the first formalization, and produced a proof seven times shorter. With the same 1,000-agent setup, Opus 5.5 completed only 26% of the formalization in 18 hours.

In another experiment, one engineer asked Fable 5.2 to design an operating system from an empty folder. The model coordinated over 1,000 subagents working around the clock for eight days. The result booted on a laptop, with disk and network drivers, permanent file storage, a window manager, and an installer.

The point is not raw capability. It is that **coordination itself has become an engineering problem**. As agent count grows, you need what human teams need: roles, interfaces, communication protocols, output contracts, and audit layers.

## Why the management layer matters

A company's org chart defines who owns what, who decides, and who checks. Agent teams face the same questions:

- **Decomposition:** who splits the work, and within what boundaries?
- **Interfaces:** what does each agent hand to the next, in what format?
- **Verification:** who checks an agent's output, with what independent evidence?
- **Escalation:** when must an agent stop and ask a human?
- **Cost:** which work deserves the expensive model, and which does not?
- **Audit trail:** even when the result is correct, is the path to it recorded?

Today, users answer most of these questions, not products. That is why many agent teams behave less like a company and more like a group chat. At scale, the group chat is not the advantage. The **management system** is.

## Questions we have not answered

- If the org chart becomes the product, where does the moat live? If everyone uses the same models, is the only differentiator orchestration skill?
- In a 1,000-agent team, what counts as good work? How do you evaluate, promote, or fire an agent?
- Are adversarial verifiers actually independent? If they come from the same model family, do they share the author's blind spots?
- When an agent team fails, who is accountable: the engineer who wrote the prompt, the orchestration layer, or the model provider?
- Will a human manager decide by reading reports written by agents? If agents also write the reports, what exactly is the human supervising?

Perhaps the biggest question is this: which traits of a human company should an agent company imitate? Its speed, its scale, or its **chain of responsibility**?

## Sources

- Google, [Gemini 4 Carbon is now available](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-carbon-now-available/), November 10, 2026.
- TechCrunch, [Meta acquires AI coding startup Conductor](https://techcrunch.com/2026/11/04/meta-acquires-ai-coding-startup-conductor/), November 4, 2026.
- Anthropic, [Claude Fable 5.2 and Mythos 5.2](https://www.anthropic.com/news/claude-fable-and-mythos-5-2), November 9, 2026.
- Anthropic, [Safely scaling multi-agent teams with Fable 5.2](https://claude.dev/blog/safely-scaling-multi-agent-teams-with-fable-5-2/).
