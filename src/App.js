import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalFonts from './fonts/fonts'
import { GlobalStyles } from './components/globalStyles'
import { useDarkMode } from './components/useDarkMode'
import { lightTheme, darkTheme } from './components/themes'
import Toggle from './components/toggler'
import Title from './components/title'

const App = () => {
  const [theme, themeToggler] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={themeToggler} />
        <GlobalFonts />
        <Title>Your journey to Middle-earth starts here</Title>
        <p>Coming soon...</p>
      </>
    </ThemeProvider>
  )
}

export default App
