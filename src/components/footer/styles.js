import styled from "styled-components";

export const Container = styled.footer`
    background-color: ${(props) => props.theme.colors.containerColor};
    color: ${(props) => props.theme.colors.text};
    text-align: center;
    font-weight: 500;
    padding: 30px;
    font-size: 0.875rem;
`;
