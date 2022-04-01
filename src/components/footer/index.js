import React from "react";
import { Container } from "./styles";

function Footer() {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <Container>
            <span>Movies&copy;{year} </span>
        </Container>
    );
}

export default Footer;
