# Reusable Stack

## Database
### Create D1 database
```bash
npx wrangler@latest d1 create <database_name>
```
1. Add a D1 database to `wrangler.jsonc`
2. Add a D1 database in `.env`
3. To get accountId go to Workers & Pages -> Overview -> copy Account ID from the right sidebar.
4. To get token go to My profile -> API Tokens and create token with D1 edit permissions.
5. generate worker-configuration.d.ts file
```bash
npx wrangler types --env-interface CloudflareBindings
```

### Generate and push migrations
```bash
npx drizzle-kit generate
```
```bash
npx drizzle-kit migrate
```
### Push migrations online
```bash
npx drizzle-kit push
```
### Push migrations locally
```bash
wrangler d1 migrations apply <database_name> --local
```

### Inspect local tables
```bash
npx wrangler d1 execute <database_name> --local --command "SELECT name FROM sqlite_schema WHERE type ='table';"

```
### Start project 
```bash
npm run dev
```
