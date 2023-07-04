import { SAMPLE_API_ENDPOINT } from "@/pages/api";
import { RandomJoke } from "@/types";
import Head from "next/head";
import { useEffect, useState } from "react";

export const TITLE = "Client-Side Rendering (CSR)";

export default function ClientSideRendering() {
  const [joke, setJoke] = useState<RandomJoke | undefined>(undefined);

  const getData = async () => {
    const response = await fetch(SAMPLE_API_ENDPOINT);
    const jsonData = await response.json();
    setJoke(jsonData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Head>
        <title>{TITLE}</title>
      </Head>
      <h1>{TITLE}</h1>
      <p>Data fetched on the client-side only.</p>
      <hr />
      <p>Fetched Data from Random Joke API</p>
      <ul>
        <li>Type: {joke?.type}</li>
        <li>Setup: {joke?.setup}</li>
        <li>Punchline: {joke?.punchline}</li>
      </ul>
    </>
  );
}
