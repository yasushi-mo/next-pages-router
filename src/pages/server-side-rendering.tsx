import Head from "next/head";
import { title } from "process";

export const TITLE = "Server-Side Rendering (SSR)";

export default function ClientSideRendering() {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
      </Head>
      <h1>{TITLE}</h1>
      <p>
        Data fetched on the server-side at <b>each</b> request before sending to
        the client.
      </p>
    </>
  );
}
