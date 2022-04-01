import React from "react";
import { Container } from "./styles";
import Movies from "../../components/moviesContainer";
import BackToTop from "../../components/buttonBackToTop";

function Home() {
    return (
        <Container>
            <Movies />
            <BackToTop />
        </Container>
    );
}

export default Home;
