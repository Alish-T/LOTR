import React from 'react'
import { func, string } from 'prop-types'
import styled from 'styled-components'

const Button = styled.button`
  background-color: ${({ theme }) => theme.buttonBackground};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.buttonColor};
  /* border-radius: 0px; */
  cursor: pointer;
  font-size:1rem;
  padding: 0.6rem;
  font-family: ${({ theme }) => theme.fonts.secondaryFont};
  box-shadow: ${({ theme }) => theme.boxShadow};
  outline: 0;
  }
`
const Toggle = ({ theme, toggleTheme }) => {
  return <Button onClick={toggleTheme}>Switch Theme</Button>
}
Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired
}
export default Toggle
