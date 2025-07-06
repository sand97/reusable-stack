import { Hono } from 'hono'
import prismaClients from './lib/prisma'

// This ensures c.env.DB is correctly typed
type Bindings = {
  DB: D1Database;
};

const app = new Hono<{ Bindings: Bindings }>();

const router = app.get('/', async (c) => {
  const prisma = await prismaClients.fetch(c.env.DB)

  const result = await prisma.user.findMany()
  return c.json({ hello: 'world from api', result })
})


export default app

export type AppType = typeof router;