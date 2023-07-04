import Head from "next/head";
import { title } from "process";

export const TITLE = "Incremental Static Regeneration (ISR)";

export default function IncrementalStaticRegeneration() {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
      </Head>
      <h1>{TITLE}</h1>
      <p>
        Data fetched at build-time on the server-side and rebuilt when data
        updated.
      </p>
    </>
  );
}
