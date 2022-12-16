import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --white: #fff;
    --black: #000;
    --green-primary: #27ae60;
    --green-50: #93d7af;
    --red-secondary: #eb5757;

    --gray100: #333333;
    --gray50: #828282;
    --gray20: #E0E0E0;
    --gray0: #f5f5f5;
    --gray4: #BDBDBD
}
button {
    cursor: pointer;
    border: 0;
    background: transparent
}

ul, ol, li {
    list-style: none;
}

img {
    max-width: 100%;
}

section, aside, div {
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
}

body: {
    background: var(--white);
    font-family: 'Inter', sans-serif;
}

`;

export const Container = styled.div`
  max-width: 1370px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
`;
