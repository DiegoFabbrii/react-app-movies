import { useContext } from "react";
import { Contexts } from "./components/contexts/context";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Global from "./styles/Global";
import Header from "./components/header";
import Home from "./pages/home";
import Movie from "./pages/movie";
import Footer from "./components/footer";
import { ThemeProvider } from "styled-components";

function App() {
    const { theme } = useContext(Contexts);

    return (
        <>
            <ThemeProvider theme={theme}>
                <Global />
                <Layout>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="movies/:id" element={<Movie />} />
                    </Routes>
                    <Footer />
                </Layout>
            </ThemeProvider>
        </>
    );
}

export default App;
