# Taiga Access Information

## Instance
- **URL:** http://localhost:9000
- **API base:** http://localhost:9000/api/v1

## Credentials
- **Username:** admin
- **Password:** 123123
- **Email:** admin@localhost

## Authentication
POST http://localhost:9000/api/v1/auth
Content-Type: application/json
Body: {"username":"admin","password":"123123","type":"normal"}

Response field with token: `auth_token` (use as `Authorization: Bearer <auth_token>`).

Cached token (may expire; re-authenticate if 401):
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTc5NDYwNzY4OSwianRpIjoiM2Q4ZTk3YTMwNjgwNDMzMDkzNmE3NThmIn0... (see /tmp/opencode/taiga_token.txt)
```

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

## User Story
- ID: 1 — "Hugo blog infrastructure setup" (status: In progress)

## Tasks
| ID | Subject | Status |
|----|---------|--------|
| 1 | Create project folder and init Hugo | Closed |
| 2 | Configure hugo.toml | Closed |
| 3 | Add layout scaffold | Closed |
| 4 | Content scaffolding | Closed |
| 5 | Deployment readiness | Closed |
| 6 | SEO verification | Closed |
| 7 | Deferred theme work (Tailwind) | New |

## Notes
- PATCH requests require a `version` field (optimistic locking). GET the resource first to obtain current version.
- Tokens expire; re-authenticate if API returns 401.
