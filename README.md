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

### Create an empty migration file
```bash
npx wrangler d1 migrations create <database_name> <migration>
```
### Generate migration from an empty database (use it only for first migration)
```bash
npx prisma migrate diff \
  --from-empty \
  --to-schema-datamodel ./prisma/schema.prisma \
  --script \
  --output migrations/<id>_<migration_name>.sql
```
### Generate migration from local database
```bash
npx prisma migrate diff \
  --from-local-d1 \
  --to-schema-datamodel ./prisma/schema.prisma \
  --script \
  --output migrations/0002_create_post_table.sql
```
### Push migrations locally
```bash
npx wrangler d1 migrations apply <database_name> --local
```
### Push migrations online
```bash
npx wrangler d1 migrations apply <database_name> --remote
```

### Inspect local tables
```bash
npx wrangler d1 execute <database_name> --local --command "SELECT name FROM sqlite_schema WHERE type ='table';"

```
### Start project 
```bash
npm run dev
```
