import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.body};
        transition: all 0.50s linear;
        color: ${({ theme }) => theme.text.textColor};
        font-family: ${({ theme }) => theme.fonts.secondaryFont};
        margin: auto, 0;
        padding: 10px, 0;
        text-align: center;
    }
`
