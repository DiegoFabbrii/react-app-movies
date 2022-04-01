import styled from "styled-components";

export const Container = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.containerColor};
    color: ${(props) => props.theme.colors.text};
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 20px;
    right: ${(props) => (props.isVisible ? "20px" : "-100%")};
    transition: 1s ease-in-out;
    cursor: pointer;

    svg {
        font-size: 1.5rem;
    }
`;
