// CODE

import { expect, it } from "vitest";
import { z } from "zod";

const Form = z.object({
  password: z.string(),
  confirmPassword: z.string(),
});
//^ 🕵️‍♂️

export const validateFormInput = (values: unknown) => {
  const parsedData = Form.parse(values);

  return parsedData;
};

// TESTS

it("Should error if the passwords are not the same", () => {
  expect(() =>
    validateFormInput({
      password: "password",
      confirmPassword: "password1",
    }),
  ).toThrowError("Passwords don't match");
});
