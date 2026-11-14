---
title: "The Agent Calls First"
date: 2026-11-11
draft: false
description: "Claude Duet acts before you ask. On representation, invitation, and rest in the attention economy."
tags: ["ai", "agents", "attention", "product"]
categories: ["Artificial Intelligence"]
slug: "agent-calls-first"
image: "/images/posts/agent-calls-first.png"
---

# The Agent Calls First

Claude Duet opened as a research preview on October 21. Anthropic's description is direct: Claude is no longer only an assistant that answers questions. It is a **proactive agent**. It sends a short morning brief, watches connected apps through the day, keeps working while you are away, and checks with you before acting on your behalf.

That is a quiet but significant shift in product design. Until now, AI worked **on request**. Duet speaks **without being asked**. So what does it mean for an agent to decide when to speak?

## Not an answerer, a starter

Duet's daily loop is simple. In the morning, a short message summarizing the most important items across connected apps. During the day, a notification only when something needs attention. When you give it a task, it works out which apps to use and what steps to take. It notifies you when the task is done or needs review.

The technically interesting part is that Duet runs on its own virtual machine with its own browser. Work continues even when your laptop or phone is off. That moves the "assistant" closer to "a colleague working in the background."

Anthropic positions Duet for professionals and small business owners with too much on their plates. The examples follow: a broker whose agent flagged a property showing on the wrong calendar day; a restaurant owner with 110 employees who uses it to work through invoices store by store; a brand strategist whose agent noticed a client call was scheduled right before her flight and offered to move it.

## Where approval sits

Duet's most important design decision is **where it stops**. It can read, draft, and prepare. But before it sends a message, makes a payment, signs a document, or deletes anything, it shows exactly what it is about to do and waits for approval.

Some actions are off-limits even with approval, such as trading securities or moving money between accounts. It is also careful with credentials: Duet never directly sees your passwords or sign-in tokens. Payments go through Link or Shop Pay, using a virtual card rather than sharing your real card number.

The architecture rests on "the human makes the final call." In practice, it creates a new problem: **approval fatigue**. If an agent asks "I am about to do this, approve?" dozens of times a day, people eventually stop reading and start clicking. At that point approval stops being a safeguard and becomes a ritual.

## When attention becomes a metric

Duet's real product is not time management. It is **attention allocation**. The agent decides which information deserves to interrupt you. That is a deeply personal and contextual judgment. When it gets it wrong, there are two failure modes:

- **False alarm:** it interrupts you for something trivial. Trust erodes.
- **Silence:** it misses something important. Worse, you do not know what you missed.

Anthropic says Duet checks connected accounts every few hours, because checking nonstop would consume plan limits much faster. That detail reveals the economics: even background checks are a cost line. An "always-on agent" is also an "always-billed agent."

## Representation or invitation?

An assistant speaking for you is representation. An assistant deciding when to speak is **invitation**. The second is harder, because it requires building an agenda on your behalf.

Duet derives that agenda from your data: email, calendar, invoices, messages. That raises a privacy question. How much data does an agent need to know you? Which data should it not see, making it less useful but safer?

Today the answer seems to be "as much as the apps you connect." As the product matures, we will have to choose between an agent with broad default access and one that does less with less.

## Questions we have not answered

- If an agent decides when to interrupt you, who holds **sovereignty over your attention**?
- If approval fatigue is inevitable, how should the approval interface be designed? A summary, the full text, or voice approval?
- When an agent moves a meeting on your behalf and gets it wrong, who is responsible: you, the agent, or the provider?
- Is an always-on agent a new surveillance layer for employees? Can an employer access a worker's agent?
- If an agent warns you correctly again and again, how much will you trust it? And will that trust eventually lead you to stop checking?

Duet's answer seems to be not "the agent goes first," but "the agent **asks** first." Yet every question is an interruption. A good assistant does not only give the right answer. It arrives with the right question at the right moment.

## Sources

- Anthropic, [Introducing Claude Duet](https://claude.com/resources/articles/claude-duet), October 21, 2026.
- Anthropic, [Claude Duet safety, privacy, and security](https://claude.com/resources/articles/claude-duet-safety-privacy-and-security), October 23, 2026.
