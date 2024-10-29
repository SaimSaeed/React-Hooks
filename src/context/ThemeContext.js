import React, { createContext, useState } from "react";

// context created and you can also give it a default value
// context is used to access our state and props and functions globally without prop drilling problem
export const ThemeContext = createContext(null)

// Each context file will have a provider function which will contain the states and functions and it will return the provider of that context
export function ThemeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false)
//   this is the provider through which the functions will be passed to the children 
    return <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        {children}
    </ThemeContext.Provider>
}
