import styled from 'styled-components'

export default styled.h1`
  font-size: 100px;
  font-weight: 200;
  color: ${({ theme }) => theme.text.titleColor};
  text-shadow: ${({ theme }) => theme.textShadow};
  font-family: ${({ theme }) => theme.fonts.primaryFont};
`