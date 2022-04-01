import React from "react";
import { CgArrowLongLeft } from "react-icons/cg";
import { Container } from "./styles";
import { Link } from "react-router-dom";

function Back() {
    return (
        <Container>
            <Link to="/">
                <CgArrowLongLeft />
                <span>Voltar</span>
            </Link>
        </Container>
    );
}

export default Back;
