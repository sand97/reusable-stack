import { Hono } from 'hono'
import { drizzle } from 'drizzle-orm/d1';
import {env} from "cloudflare:workers";
import * as schema from './db/schema';

// This ensures c.env.DB is correctly typed
type Bindings = {
  DB: D1Database;
};

const app = new Hono<{ Bindings: Bindings }>();

const router = app.get('/', async (c) => {
  const db = drizzle(env.DB, { schema });
  // const result = await db.select().from(usersTable).all()
  const result = await db.query.usersTable.findMany({
    limit: 10,
  })


  return c.json({ hello: 'world from api', users: result })
})


export default app

export type AppType = typeof router;