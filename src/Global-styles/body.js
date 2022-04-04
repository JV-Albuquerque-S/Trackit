import { createGlobalStyle } from "styled-components";

export const BodyStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }
    
    body{
        width: 100vw;
        font-family: 'Lexend Deca', sans-serif;
    }
    .root{
        height: 100%;
    }
`;