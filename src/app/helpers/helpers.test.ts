import { expect, jest, test } from "@jest/globals"
import React, { useEffect, useState } from "react"
import { toggleDarkMode } from "./helpers"

test("Typescript Sanity check", () => {
  const one: number = 1
  expect(one).toBe(1)
})

/*
function
export const toggleDarkMode = (
  isDarkMode: boolean,
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setIsDarkMode(!isDarkMode)
  localStorage.setItem("darkMode", JSON.stringify(!isDarkMode))
}

jsx
  <IconButton
    color="inherit"
    onClick={() => toggleDarkMode(isDarkMode, setIsDarkMode)}
  >
    {isDarkMode ? <Brightness7 /> : <Brightness4 />}
  </IconButton>
*/

//toggle dark mode test suite
describe("toggleDarkMode", () => {
  //local storage only accepts strings in a key value pair structure
  //so a record is an accurate representation
  let mockStorage: Record<string, string> = {}
  const [mockIsDarkMode, setMockIsDarkMode] = useState(false)
})
