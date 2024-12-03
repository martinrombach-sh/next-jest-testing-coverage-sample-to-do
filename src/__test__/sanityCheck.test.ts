/*
Playwright tests need to be invoked via npx playwright test and excluded from Jest test runs.
Creating one directory for playwright tests and one for Jest is the recommended way of doing it.
*/

import { it } from "node:test"

test("Typescript Sanity check", () => {
  const one: number = 1
  expect(one).toBe(1)
})
