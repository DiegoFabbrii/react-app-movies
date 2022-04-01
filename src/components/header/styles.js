import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.containerColor};
    font-family: "Lobster", cursive;
    font-size: 1.5rem;
`;

export const HeaderContainer = styled.div`
    width: 90%;
    padding: 30px 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        color: ${(props) => props.theme.colors.text};
    }

    @media (max-width: 540px) {
        h2 a {
            font-size: 1.75rem;
        }
    }
`;
