import React from "react";
import { Container, HeaderContainer } from "./styles";
import ThemeSwitcher from "../themeSwitcher";
import { Link } from "react-router-dom";

function Header() {
    return (
        <Container>
            <HeaderContainer>
                <h2>
                    <Link to="/">Movies</Link>
                </h2>
                <ThemeSwitcher />
            </HeaderContainer>
        </Container>
    );
}

export default Header;
