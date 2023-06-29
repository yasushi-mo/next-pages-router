import Head from "next/head";
import { title } from "process";

const TITLE = "Client-Side Rendering (CSR)";

export default function ClientSideRendering() {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
      </Head>
      <h1>{TITLE}</h1>
      <p>Data fetched on the client-side only.</p>
    </>
  );
}
