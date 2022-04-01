import styled from "styled-components";

export const Container = styled.div`
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: 1px solid ${(props) => props.theme.colors.text};
    cursor: pointer;

    svg {
        font-size: 16px;
        color: ${(props) => props.theme.colors.text};
    }
`;
