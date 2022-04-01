import React, { useContext } from "react";
import { Contexts } from "../contexts/context";
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { Container } from "./styles";

function ThemeSwitcher() {
    const { theme, themeHandler } = useContext(Contexts);

    return (
        <Container onClick={themeHandler}>
            {theme.title === "light" ? <FaMoon /> : <BsSunFill />}
        </Container>
    );
}

export default ThemeSwitcher;
