import React, { useContext } from "react";
import { Contexts } from "../contexts/context";
import { Container } from "./styles";
import { HiArrowSmUp } from "react-icons/hi";
import {} from "styled-components";

function BackToTop() {
    const { backToTop, isVisible } = useContext(Contexts);
    return (
        <Container onClick={backToTop} isVisible={isVisible}>
            <HiArrowSmUp />
        </Container>
    );
}

export default BackToTop;
