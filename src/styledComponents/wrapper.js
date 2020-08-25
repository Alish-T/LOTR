import styled from 'styled-components';


export default styled.div`
    margin-right: auto;
    margin-left: auto;
    padding-right: 10px;
    padding-left: 10px;
    text-align: center;
    font-family: ${props => props.theme.fonts.secondaryFont};
    background: gray;
    height: 100%;
    width: 100%;
`;
