import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
import movieApi from '../../services/movieApi';
import { IMAGE_URL } from '../../utils/constants';
import classes from './Movies.css';

interface Movie {
    poster_path: string;
    title: string;
}

const Movies = () => {
    const [movies, setMovies] = React.useState<Array<Movie>>(null);
    const fetchMovies = async () => {
        const response = await movieApi.getPopularMovies();
        setMovies(response.results);
    };

    React.useEffect(() => {
        fetchMovies();
    }, []);


    return (
        <div>
            <section className={classes.MovieSection}>
                <h2>Popular movies</h2>
                <div className={`${classes.CardContainer}`}>
                    {
                    movies && movies.map((elem, index) => {
                        return (
                            <div key={index} className={classes.CardImage}>
                                <img src={`${IMAGE_URL}/${elem.poster_path}`} />
                                <h1>{elem.title}</h1>
                            </div>
                            );
                        }
                    )}
                </div>
            </section>
        </div>
    )
};

export default Movies;