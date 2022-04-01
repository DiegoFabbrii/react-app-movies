import styled from "styled-components";

export const Container = styled.main`
    width: 90vw;
    margin: 40px auto;
    font-weight: 500;
    color: ${(props) => props.theme.colors.text};
`;
