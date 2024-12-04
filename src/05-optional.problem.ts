// CODE

import { expect, it } from "vitest";
import { z } from "zod";

const Form = z.object({
  name: z.string(),
  phoneNumber: z.string().optional(),
  //                     ^ 🕵️‍♂️
});

export const validateFormInput = (values: unknown) => {
  const parsedData = Form.parse(values);

  return parsedData;
};

// TESTS

it("Should validate correct inputs", async () => {
  expect(() =>
    validateFormInput({
      name: "Matt",
    }),
  ).not.toThrow();

  expect(() =>
    validateFormInput({
      name: "Matt",
      phoneNumber: "123",
    }),
  ).not.toThrow();
});

it("Should throw when you do not include the name", async () => {
  expect(() => validateFormInput({})).toThrowError("Required");
});
