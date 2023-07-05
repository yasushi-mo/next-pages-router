import { FetchedRandomJoke } from "@/components/FetchedRandomJoke";
import { SAMPLE_API_ENDPOINT } from "@/pages/api";
import { RandomJoke } from "@/types";
import Head from "next/head";
import useSWR from "swr";

export const TITLE = "Client-Side Rendering (CSR)";

export default function ClientSideRendering() {
  const {
    data: randomJoke,
    error,
    isLoading,
  } = useSWR<RandomJoke>(SAMPLE_API_ENDPOINT, fetcher);

  if (error) return <p>Failed to load.</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <Head>
        <title>{TITLE}</title>
      </Head>
      <h1>{TITLE}</h1>
      <p>Data fetched on the client-side only.</p>
      <FetchedRandomJoke randomJoke={randomJoke} />
    </>
  );
}

async function fetcher() {
  const response = await fetch(SAMPLE_API_ENDPOINT);
  const randomJoke = await response.json();

  return randomJoke;
}
