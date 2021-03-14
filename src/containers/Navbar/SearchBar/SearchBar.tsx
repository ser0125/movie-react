import * as React from 'react';
import { Search } from 'react-feather';
import useOutsideClick from '../../../utils/useOutsideClick';
import classes from './SearchBar.css';

const SearchBar = () => {
    const [isVisible, setIsVisible]  = React.useState(false);
    const ref= React.useRef<HTMLInputElement>();

    useOutsideClick(ref, () => {
        setIsVisible(false);
    }, isVisible);

    const openSeachBar = () => {
        setIsVisible(true);
    }

    React.useEffect(() => {
        if(isVisible)
            ref.current.focus();
    }, [isVisible])

    return (
        <React.Fragment>
            <Search className={classes.SearchIcon} onClick={() => openSeachBar()}/>
            {
                <React.Fragment>
                    <input type="text" ref={ref} className={!isVisible ? `${classes.SearchInput}`: `${classes.SearchInputVisible}`}/>
                </React.Fragment>
            }
        </React.Fragment>
    )
};

export default SearchBar;