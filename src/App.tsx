import * as React from 'react';
import Navbar from './containers/Navbar/Navbar';
import { ThemeProvider } from "styled-components";
import theme from './assets/_variables';
import Movies from './containers/Movies/Movies';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import TvSeries from './containers/TvSeries/TvSeries';
import MovieDetail from './containers/Movies/Detail/Detail';
import SerieDetail from './containers/TvSeries/Detail/Detail';

const App = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Navbar />
                <Switch>
                    <Route exact path="/series" component={TvSeries}></Route>
                    <Route path="/movie/:id" component={MovieDetail}></Route>
                    <Route path="/serie/:id" component={SerieDetail}></Route>
                    <Route exact path="/" component={Movies}></Route>
                </Switch>
            </ThemeProvider>
        </BrowserRouter>
    )
};

export default App;