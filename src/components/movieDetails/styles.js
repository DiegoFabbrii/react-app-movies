import styled from "styled-components";

export const Title = styled.h1`
    margin-bottom: 40px;
    text-align: center;

    @media (max-width: 540px) {
        font-size: 1.5rem;
    }
`;

export const Container = styled.div`
    display: flex;
    padding: 30px 0;
    gap: 20px;

    @media (max-width: 1250px) {
        flex-direction: column;
    }
`;

export const MovieImg = styled.section`
    width: 100%;

    img {
        width: 600px;
        border-radius: 10px;
    }

    @media (max-width: 1250px) {
        img {
            width: 100%;
        }
    }
`;

export const Overview = styled.section`
    background-color: ${(props) => props.theme.colors.containerColor};
    border-radius: 10px;
    padding: 0 40px;

    h3 {
        margin-bottom: 10px;
    }

    @media (max-width: 1300px) {
        padding: 0;
    }

    @media (max-width: 540px) {
        p {
            font-size: 0.875rem;
        }
    }
`;

export const Genres = styled.ul`
    font-size: 0.75rem;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    li {
        background-color: ${(props) => props.theme.colors.containerColor};
        border-radius: 5px;
    }
`;

export const VoteAvarage = styled.div`
    background-color: ${(props) => props.theme.colors.containerColor};
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 0.75rem;
    margin: 10px 0;
`;
