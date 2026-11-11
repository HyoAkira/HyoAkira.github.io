# Taiga Access Information

## Instance
- **URL:** http://localhost:9000
- **API base:** http://localhost:9000/api/v1

## Credentials
- **Username:** ai-agent
- **Password:** aiagent123
- **Email:** ai-agent@localhost

## Authentication
POST http://localhost:9000/api/v1/auth
Content-Type: application/json
Body: {"username":"ai-agent","password":"aiagent123","type":"normal"}

Response field with token: `auth_token` (use as `Authorization: Bearer <auth_token>`).

Cached token (may expire; re-authenticate if 401): re-authenticate with the body above if a 401 is returned. Do not store tokens in this file.

## Project
- **Name:** Personal Blog
- **Slug:** personal-blog
- **ID:** 1
- **URL:** http://localhost:9000/project/personal-blog
- **Template:** Scrum (id 1)
- **Private:** true

## Endpoints (v1)
- Projects: /api/v1/projects
- User stories: /api/v1/userstories?project=1
- Tasks: /api/v1/tasks?project=1 (or ?user_story=1)
- Task statuses: /api/v1/task-statuses?project=1
- User story statuses: /api/v1/userstory-statuses?project=1

## User Stories (all Done)
| ID | Subject | Status |
|----|---------|--------|
| 1 | Hugo blog infrastructure setup | Done |
| 3 | Blog features: tags, related and random articles | Done |
| 4 | Hugo theme with daisyUI (reference design) | Done |
| 5 | Post-launch enhancements: i18n, math/code, filtering, UX fixes | Done |
| 6 | Design adjustments & bug fixes (post-launch) | Done |
| 7 | Design tweaks: hero image placeholder | Done |
| 8 | Rewrite theme components using daisyUI | Done |
| 9 | Responsive theme redesign + system light/dark + code-block | Done |

## Tasks
All tasks from 1 through 30 are Closed. No open tasks.

Tasks for User Story 9 (all Closed):
| ID | Subject | Status |
|----|---------|--------|
| 42 | Responsive redesign: layout, typography, remove duplicate featured components | Closed |
| 43 | System light/dark theme (prefers-color-scheme) | Closed |
| 44 | Adapt code-block theme to light/dark | Closed |

## AI Agent User
- **Username:** ai-agent
- **Password:** aiagent123
- **Email:** ai-agent@localhost
- **User ID:** 6
- **Role in project:** Product Owner (role id 5)
- **Membership ID:** 2
- **Created via:** Django createsuperuser in taiga-back container

Cached token (may expire; re-authenticate if 401):
```
Use /api/v1/auth with username ai-agent / password aiagent123
```
