import * as React from 'react';
import Navbar from './containers/Navbar/Navbar';
import { ThemeProvider } from "styled-components";
import theme from './assets/_variables';
import Movies from './containers/Movies/Movies';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import TvSeries from './containers/TvSeries/TvSeries';

const App = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Navbar />
                <Switch>
                    <Route exact path="/series" component={TvSeries}></Route>
                    <Route exact path="/" component={Movies}></Route>
                </Switch>
            </ThemeProvider>
        </BrowserRouter>
    )
};

export default App;