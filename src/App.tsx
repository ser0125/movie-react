import * as React from 'react';
import Navbar from './containers/Navbar/Navbar';
import { ThemeProvider } from "styled-components";
import theme from './assets/_variables';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Navbar />
        </ThemeProvider>
    )
};

export default App;