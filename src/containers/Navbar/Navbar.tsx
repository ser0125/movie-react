import * as React from 'react';
import SearchBar from './SearchBar/SearchBar';
import Movies from '../Movies/Movies';
import classes from './Navbar.css';
import { Film } from 'react-feather';
import CommonLink from '../../components/CommonLink/CommonLink';

const Navbar = () => {
    return (
        <nav className={classes.Navbar}>
            <div className={classes.TitleContainer}>
                <Film />
                <h1 className={classes.Title}>
                    <CommonLink color='white' decoration="none" to="/">Movie React</CommonLink>
                </h1>
                <ul>
                    <li className={classes.MenuList}>
                        <CommonLink color='white' decoration="none" to="/series">Series</CommonLink>
                    </li>
                </ul>
            </div>
            <div className={classes.SearchSection}>
            <SearchBar />
            </div>
        </nav>
    )
};

export default Navbar;