import Head from "next/head";
import { SAMPLE_API_ENDPOINT } from "./api";

export const TITLE = "Server-Side Rendering (SSR)";

export default function ServerSideRendering({ jsonData }: { jsonData: any }) {
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
      <hr />
      <p>Fetched Data from Random Joke API</p>
      <ul>
        <li>Type: {jsonData?.type}</li>
        <li>Setup: {jsonData?.setup}</li>
        <li>Punchline: {jsonData?.punchline}</li>
      </ul>
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch(SAMPLE_API_ENDPOINT);
  const jsonData = await response.json();

  return {
    props: {
      jsonData, // will be passed to the page component as props
    },
  };
}
