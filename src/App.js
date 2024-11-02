import React from "react";
import {CssBaseline} from "@mui/material";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Layout from "./pages/Layout";
import Footer from './components/Footer';
import Error404 from "./pages/Error404";
import './App.css';

const theme = createTheme({
    palette: {
        primary: {
            main: "#FFA500",
        },
        background: {
            default: "#0D0D0D",
            paper: "#1C1C1C",
        },
        text: {
            primary: "#ffffff",
            secondary: "#FFA500",
            secondary2: "#F0944F",
            secondary3: "#FF69B4",
        },
        footer: {
            default: "#1C1C1C",
        }
    },
});


function App() {

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Router>
                <div className="app-container">
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Layout/>}/>
                            <Route path="/*" element={<Error404/>}/>
                        </Routes>
                    </div>
                    <Footer/>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;