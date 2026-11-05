---
title: "Dağıtık Sistemlerde Tutarlılık: Raft ve Paxos"
date: 2025-02-28
draft: false
description: "Lider seçimi ve veri tutarlılığının matematiksel garantisi."
tags: ["distributed", "consensus", "raft"]
categories: ["Yazılım Mühendisliği"]
slug: "distributed-consensus"
---
# Dağıtık Sistemlerde Tutarlılık

Ağ bölünmeleri durumunda lider seçimi kritiktir.

## Raft Algoritması

1. **Leader Election** — rastgele zaman aşımı ile lider seçilir.
2. **Log Replication** — lider günlükleri takipçilere kopyalar.
3. **Safety** — yalnızca commit edilmiş girdiler uygulanır.

> Raft, Paxos'tan daha anlaşılır olması için tasarlanmıştır.

```python
def request_vote(term, candidate_id):
    if term > current_term:
        current_term = term
        voted_for = candidate_id
        return True
    return False
```

- Split-brain önleme
- Fencing token kullanımı
- Quorum tabanlı kararlar
