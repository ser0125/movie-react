import * as React from 'react';
import MovieButton from '../../components/MovieButton/MovieButton';
import SearchBar from './SearchBar/SearchBar';
import classes from './Navbar.css';
import { Search } from 'react-feather';

const Navbar = () => {
    return (
        <nav className={classes.Navbar}>
            <div className={classes.Title}>
                <h1>Movie React</h1>
            </div>
            <div className={classes.SearchSection}>
            <SearchBar />
            </div>
        </nav>
    )
};

export default Navbar;