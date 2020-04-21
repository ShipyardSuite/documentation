# gateway

Gateway Service for application routing

## Service Containers

| Title      | Port | url          | api               |
| ---------- | ---- | ------------ | ----------------- |
| gateway    | 8080 |              |                   |
| connection | 3069 |              | `/connection/api` |
| status     | 3088 | `/status`    | `/status/api`     |
| homepage   | 3001 | `/`          |                   |
| auth       | 3002 | `/auth`      | `/auth/api/`      |
| notfound   | 3003 | `/notfound`  |                   |
| dashboard  | 3004 | `/dashboard` | `/dashboard/api`  |
| user       | 3005 |              | `/user/api/`      |
| project    | 3006 |              | `/project/api/`   |