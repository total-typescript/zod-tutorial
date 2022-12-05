// CODE

import { it } from "vitest";
import { z } from "zod";
import { Equal, Expect } from "./helpers/type-utils";

const genericFetch = <ZSchema extends z.ZodSchema>(
  url: string,
  schema: ZSchema,
): Promise<z.infer<ZSchema>> => {
  return fetch(url)
    .then((res) => res.json())
    .then((result) => schema.parse(result));
};

// TESTS

it("Should fetch from the Star Wars API", async () => {
  const result = await genericFetch(
    "https://totaltypescript.com/swapi/people/1.json",
    z.object({
      name: z.string(),
    }),
  );

  type cases = [
    // Result should equal { name: string }, not any
    Expect<Equal<typeof result, { name: string }>>,
  ];
});
