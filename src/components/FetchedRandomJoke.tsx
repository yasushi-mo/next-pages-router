import { RandomJoke } from "@/types";

export function FetchedRandomJoke({ randomJoke }: { randomJoke: RandomJoke }) {
  return (
    <>
      <hr />
      <p>Fetched Data from Random Joke API</p>
      <ul>
        <li>Type: {randomJoke?.type}</li>
        <li>Setup: {randomJoke?.setup}</li>
        <li>Punchline: {randomJoke?.punchline}</li>
      </ul>
    </>
  );
}
