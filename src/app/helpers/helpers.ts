//"use client" for a test?
import React, { useEffect, useState } from "react"

//need to pass dark mode state and/or local storage as arguments
//need to make the arguments reusable

//why might the tests not pick up all the lines?

export const toggleDarkMode = (
  isDarkMode: boolean,
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setIsDarkMode(!isDarkMode)
  localStorage.setItem("darkMode", JSON.stringify(!isDarkMode))
}

//if it breaks:
//const newMode = !isDarkMode;
//setIsDarkMode(newMode);
