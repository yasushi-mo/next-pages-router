import Head from "next/head";
import { title } from "process";

const TITLE = "Static-Site Generation (SSG)";

export default function StaticSiteGeneration() {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
      </Head>
      <h1>{TITLE}</h1>
      <p>
        Data fetched at build-time on the server-side before sending to the
        client.
      </p>
    </>
  );
}
