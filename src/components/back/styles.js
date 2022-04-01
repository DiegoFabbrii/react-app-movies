import styled from "styled-components";

export const Container = styled.div`
    margin: 20px 0;
    font-size: 0.875rem;

    a {
        display: flex;
        align-items: center;
        max-width: 70px;
        gap: 5px;
        color: ${(props) => props.theme.colors.text};
    }

    svg {
        font-size: 1.25rem;
    }
`;
