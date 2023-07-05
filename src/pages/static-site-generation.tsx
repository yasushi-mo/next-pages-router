import Head from "next/head";
import { title } from "process";
import { SAMPLE_API_ENDPOINT } from "./api";
import { RandomJoke } from "@/types";
import { FetchedRandomJoke } from "@/components/FetchedRandomJoke";

export const TITLE = "Static-Site Generation (SSG)";

export default function StaticSiteGeneration({
  randomJoke,
}: {
  randomJoke: RandomJoke;
}) {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
      </Head>
      <h1>{TITLE}</h1>
      <p>
        Data fetched at <b>build-time</b> on the server-side before sending to
        the client.
      </p>
      <FetchedRandomJoke randomJoke={randomJoke} />
    </>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  const response = await fetch(SAMPLE_API_ENDPOINT);
  const randomJoke = await response.json();

  return {
    props: {
      randomJoke, // will be passed to the page component as props
    },
  };
}
