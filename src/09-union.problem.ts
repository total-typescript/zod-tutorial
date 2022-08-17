// CODE

import { expect, it } from "vitest";
import { z } from "zod";

export const doesStarWarsPersonExist = async (id: string) => {
  const data = await fetch("https://swapi.dev/api/people/" + id).then((res) =>
    res.json(),
  );

  const result = StarWarsPersonResult.parse(data);

  return Boolean(result);
};

const StarWarsPersonResult = z.object({
  name: z.string(),
});

// TESTS

it("Should return false if the star wars person does not exist", async () => {
  const doesExist = await doesStarWarsPersonExist("11238123781623");

  expect(doesExist).toEqual(false);
});

it("Should return true if the star wars person does exist", async () => {
  const doesExist = await doesStarWarsPersonExist("1");

  expect(doesExist).toEqual(true);
});
