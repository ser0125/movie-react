import { ChevronLeft, ChevronRight } from "react-feather";
import * as React from 'react';
import classes from './Carousel.css';
import { IMAGE_URL } from "../../utils/constants";
import {Link} from 'react-router-dom';

const Carousel = ({items, sectionTitle, type}) => {
    const [positionX, setPositionX] = React.useState<any | number>(0);
    let arrowLeft = positionX !== 0 ? classes.ArrowLeft : `${classes.ArrowLeft} ${classes.ArrowLeftHidden}`;
    let arrowRight = positionX !== -5460 ? classes.ArrowRight : `${classes.ArrowLeft} ${classes.ArrowRightHidden}`;
    let styles = {
        transform: `translateX(${positionX}px)`
    }
    const translateToTheRight = () => {
        setPositionX(previousPosition => previousPosition - 1820);
    };

    const translateToTheLeft = () => {
        setPositionX(previousPosition => previousPosition + 1820);
    };

    return (
        <section className={classes.MovieSection}>
        <h2>{sectionTitle}</h2>
        <ChevronLeft className={arrowLeft} size={55} onClick={translateToTheLeft}/>
                <div className={`${classes.CardContainer}`} style={styles}>
                    {
                    items && items.map((elem, index) => {
                        return (
                            <Link key={index} to={`/${type}/${elem.id}`}>
                                <div className={classes.CardImage}>
                                    <img src={`${IMAGE_URL}/${elem.poster_path}`} />
                                    <h1>{elem.title || elem.name}</h1>
                                </div>
                            </Link>
                            );
                        }
                    )}
                </div>
                <ChevronRight className={arrowRight} size={55} onClick={translateToTheRight}/>
        </section>
    )
};

export default Carousel;