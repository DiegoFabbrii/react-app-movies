import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }

    body {
        font-family: 'Poppins', sans-serif;
        background-color: ${(props) => props.theme.colors.background};
        /* display: flex;
        flex-direction: column;
        justify-content: space-between; */
        
        /* a {
           color: #333;
        } */
        ::-webkit-scrollbar {
            width: 6px;
        }
        ::-webkit-scrollbar-thumb {
            background-color: ${(props) => props.theme.colors.text};
        }
    }

`;
