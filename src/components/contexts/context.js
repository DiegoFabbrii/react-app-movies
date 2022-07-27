import { createContext, useState, useEffect } from "react";
import { light, dark } from "../../styles/themes/index";

export const Contexts = createContext();

function ContextsProvider({ children }) {
    const [isVisible, setIsVisible] = useState(false);
    const [theme, setTheme] = useState(light);

    //BUTTON BACK TO TOP FEATURE
    const buttonVisibility = () =>
        window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false);

    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    //  DARK-LIGHT THEME FEATURE
    const themeHandler = () => {
        setTheme(theme.title === "light" ? dark : light);
    };

    useEffect(() => {
        window.addEventListener("scroll", buttonVisibility);

        const getTheme = () => {
            const savedTheme = JSON.parse(localStorage.getItem("theme"));
            setTheme(savedTheme === "light" ? light : dark);
        };

        getTheme();
    }, []);

    useEffect(() => {
        const saveTheme = () => {
            localStorage.setItem("theme", JSON.stringify(theme.title));
        };

        saveTheme();
    }, [theme]);

    return (
        <Contexts.Provider
            value={{ theme, themeHandler, isVisible, backToTop }}
        >
            {children}
        </Contexts.Provider>
    );
}

export default ContextsProvider;
