import React, { Component } from 'react'
// import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import GlobalFonts from './fonts/fonts'

import Wrapper from './styledComponents/wrapper'
import Title from './styledComponents/Title'

const theme = {
  fonts: {
    primaryFont: 'Ringbearer',
    secondaryFont: 'Aniron',
  } 
}


class App extends Component {
  render () {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <Wrapper>
            <GlobalFonts />
              <Title>Your journey starts here</Title>
            <p>Lorem ipsum...</p>
          </Wrapper>
        </ThemeProvider>
      </div>
    )
  }
}

export default App
