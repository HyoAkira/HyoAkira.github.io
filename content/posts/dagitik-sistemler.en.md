---
title: "Consistency in Distributed Systems: Raft and Paxos"
date: 2025-02-28
draft: false
description: "Mathematical guarantees of leader election and data consistency."
tags: ["distributed", "consensus", "raft"]
categories: ["Software Engineering"]
slug: "distributed-consensus"
---
# Consistency in Distributed Systems

Leader election is critical during network partitions.

## The Raft Algorithm

1. **Leader Election** — leader chosen via randomized timeout.
2. **Log Replication** — leader replicates logs to followers.
3. **Safety** — only committed entries are applied.

> Raft was designed to be more understandable than Paxos.

```python
def request_vote(term, candidate_id):
    if term > current_term:
        current_term = term
        voted_for = candidate_id
        return True
    return False
```

- Split-brain prevention
- Fencing token usage
- Quorum-based decisions
