---
title: "Agents with Wallets"
date: 2026-11-14
draft: false
description: "ChatGPT Wallet lets agents pay; United shows them the door. On delegated authority, consent, and liability."
tags: ["ai", "agents", "commerce", "trust"]
categories: ["Artificial Intelligence"]
slug: "agents-with-wallets"
image: "/images/posts/agents-with-wallets.png"
---

# Agents with Wallets

On November 13, OpenAI introduced **ChatGPT Wallet**. Two days earlier, United Airlines said it would restrict unauthorized third-party AI agents from its digital channels. Same week, same question, two different answers: *may an agent act on my behalf?*

One is building a payment rail; the other is building a wall. Both can be right, because the technical part is now the easy part. The institutional part is not.

## How the wallet works

A user adds a card once. Before each purchase, they review the items, the total, and the selected card, then approve with a security check such as Face ID or a fingerprint scan. The payment network then issues a **payment token**, a substitute for the real card details. The business and the agent never see the actual card number. Existing rewards and eligible dispute protections stay with the card.

The first release is limited to US ChatGPT Pro subscribers, through `dots`. The more consequential plan is delegation: users set spending limits, purchase categories, or time periods and pre-approve purchases with enhanced safeguards, including biometric checks and a clear record of authorization.

The distinction matters. The token protects the merchant. The biometric approval documents the user's intent. Neither, on its own, answers who is responsible when the agent buys the wrong thing.

## Why United said no

United's objection is not that agents are insecure. It is about the **scope of delegated authority**. The airline argues that giving third-party agents access to a MileagePlus account, bookings, or add-ons can expose personal information and lead to purchases, account changes, or use of miles without the customer's approval.

There is also a regulatory argument that gets less attention. United says automated agents could violate FAA and DOT rules, because flight check-in requires a human to acknowledge that bags do not contain prohibited items. In other words, some steps cannot be automated merely because the user clicked "allow." The law asks for a human's informed acknowledgment at the moment of the action, not a blanket permission granted earlier.

United is not banning agents outright. It is asking for standardized integrations with privacy, security, authorization, and accountability. That is not "no agents." It is "agents must prove who they are and who stands behind them."

## The disagreement is not about technology

OpenAI's position is that agents should fit into existing payment systems. United's position is that existing systems should not fit agents until accountability exists. The gap between those statements is not an engineering preference. It is a choice about the architecture of responsibility.

Today's wallet puts a human on the approval button of every transaction. That is less autonomy than remote control. The delegated model removes the human from the loop and replaces them with limits, categories, and time windows. At that point, "I approved it" stops meaning "I accept this outcome."

A payment token tells the merchant that a real card authorized the transaction. It does not tell the merchant what they actually need to know: *is the agent acting with the account holder's genuine authority, or was the account holder deceived?*

## What it means for small businesses

Being "agent-ready" is not just publishing a product feed. Access policy, payment risk, authentication, returns, and customer support have to be designed together. Block agents and you may lose customers. Accept them and you need to prove who placed the order and with what authority.

The web will likely split into three zones: **agent-friendly**, **agent-restricted**, and **human-only**. United is in the third zone today. OpenAI is trying to grow the first. The borders will be drawn less by capability than by trust and liability agreements.

## Questions we have not answered

- If every purchase needs a fingerprint, is that an autonomous agent or a more expensive remote control?
- When a pre-authorized agent buys within its limits and the wrong item arrives, who bears the loss: the user, the agent provider, the payment network, or the merchant?
- How does a merchant verify that the person behind the agent actually consented? Does "authorized agent" become a certification layer, like PCI?
- If an agent negotiates, is that personalized pricing? Is it fair to charge an agent a different price for the same seat?
- If United is right, will other critical infrastructure providers build similar walls? Does the agent era become an archipelago of permitted islands?

The wallet is a consent machine. The hard part is designing the accountability behind the consent.

## Sources

- OpenAI, [Introducing ChatGPT Wallet](https://openai.com/index/introducing-chatgpt-wallet/), November 13, 2026.
- United Airlines, [United Restricts Access for Third-Party AI Agents](https://united.mediaroom.com/news-releases?item=125496), November 11, 2026.
- United Airlines, [Unauthorized third-party AI agents or assistants](https://www.united.com/en/us/fly/help-center/digital-trust-center/artificial-intelligence/third-party-ai-agents.html).
- TechCrunch, [United Airlines blocks AI agents from booking flights, citing cybersecurity risks](https://techcrunch.com/2026/11/12/united-airlines-blocks-ai-agents-from-booking-flights-citing-cybersecurity-risks/), November 12, 2026.
