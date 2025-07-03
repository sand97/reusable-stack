import { Hono } from 'hono'

const app = new Hono()

const router = app.get('/', (c) => {
  return c.json({ hello: 'world from api' })
})


export default app

export type AppType = typeof router;