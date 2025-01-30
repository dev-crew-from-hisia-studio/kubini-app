import React, { createContext, useEffect } from 'react'
import useLocalStorage from "use-local-storage";

export const ThemeContext = createContext<null | any>(null)


interface ThemeContextParams {
  children?: React.ReactNode
}

export const ThemeProvider: React.FC<ThemeContextParams> = ({children}) => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  const [displayType, setDisplayType] = useLocalStorage('display', 'default');
  const [alreadyChoice, setAlreadyChoice] = useLocalStorage('already_display', 'no');
  const [colorPalette, setColorPalette] = useLocalStorage('colorPalette', "default");
  const [defaultTheme, setDefaultTheme] = useLocalStorage('isDefaultTheme', "default");

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setDefaultTheme("no-default")
    setTheme(newTheme)
  }

  const swichtDefautTheme = () => {
    setDefaultTheme("default")
  }

  const switchPaletteColor = (value : "default" | "palette-2" | "palette-3" | "palette-4" | "palette-5" | "palette-6" | "palette-7") => {
    setColorPalette(value)
  }

  const switchDisplayType = (value : "default" | "display-1") => {
    setDisplayType(value)
  }

  const switchAlreadyType = () => {
    setAlreadyChoice("yes")
  }

  useEffect(() => {
    let body: any = document.querySelector("body")
    if(defaultTheme === "default"){
      if(defaultDark){
        body && (body.style.background = "#121212")
      }else{
        body && (body.style.background = "#fff")
      }
    }else{
      if(theme === "light"){
        body && (body.style.background = "#fff")
      }else{
          body && (body.style.background = "#121212")
      }
    }
    
  }, [theme, defaultDark, defaultTheme]);

  return (
    <ThemeContext.Provider value={{
      theme,
      colorPalette,
      defaultDark,
      defaultTheme,
      alreadyChoice,
      displayType,
      switchAlreadyType,
      switchTheme,
      swichtDefautTheme,
      switchPaletteColor,
      switchDisplayType
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

