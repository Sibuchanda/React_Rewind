import React, { createContext, useState } from 'react'

const ThemeContext = createContext();
const Themeprovider = ({children}) => {

 const [theme, setTheme] = useState("light");
 const handleButtonToggle = ()=>{
   return setTheme((prev)=> (prev==='dark' ? 'light' : 'dark'));
 }
  return (
    <>
     <ThemeContext.Provider value = {{theme, handleButtonToggle}}>
        {children}
     </ThemeContext.Provider>
    
    </>
  )
}

export {ThemeContext, Themeprovider};