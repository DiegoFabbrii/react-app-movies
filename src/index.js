import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ContextsProvider from "./components/contexts/context";

ReactDOM.render(
    <BrowserRouter>
        <ContextsProvider>
            <App />
        </ContextsProvider>
    </BrowserRouter>,
    document.getElementById("root")
);
