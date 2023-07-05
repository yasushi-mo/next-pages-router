import Head from "next/head";
import { SAMPLE_API_ENDPOINT } from "./api";
import { RandomJoke } from "@/types";
import { FetchedRandomJoke } from "@/components/FetchedRandomJoke";

export const TITLE = "Incremental Static Regeneration (ISR)";

export default function IncrementalStaticRegeneration({
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
        Data fetched at build-time on the server-side and rebuilt when data
        updated.
      </p>
      <FetchedRandomJoke randomJoke={randomJoke} />
    </>
  );
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const response = await fetch(SAMPLE_API_ENDPOINT);
  const randomJoke = await response.json();

  return {
    props: {
      randomJoke, // will be passed to the page component as props
    },

    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 5 seconds
    revalidate: 5, // In seconds
  };
}
