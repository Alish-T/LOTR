import styled from 'styled-components'

export default styled.h1`
  font-size: 100px;
  font-weight: 200;
  color: #c8ac2a;
  text-shadow: #000 1px 0 7px;
  font-family: ${props => props.theme.fonts.primaryFont};
`

/*   text-shadow: 1px 1px 2px black; */
