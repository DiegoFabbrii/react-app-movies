import styled from "styled-components";

export const Container = styled.div`
    font-weight: 500;
    transition: 0.3s;
    color: ${(props) => props.theme.colors.text};

    p {
        margin-bottom: 5px;

        @media (max-width: 540px) {
            font-size: 0.875rem;
        }
    }

    :hover {
        transform: scale(1.1);
    }

    img {
        width: 100%;
        border-radius: 10px;
    }
`;
