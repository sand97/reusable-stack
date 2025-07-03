import type { Route } from "./+types/home";
import { Welcome } from "~/welcome/welcome";
import type {AppType} from "api/src";
import { hc } from 'hono/client'


export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader({ context }: Route.LoaderArgs) {
  const client = hc<AppType>('http://localhost:8787')
  const server = await client.index.$get()
  const serverData = await server.json()

  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE, server: serverData.hello };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <Welcome message={loaderData.message} server={loaderData.server} />;
}
