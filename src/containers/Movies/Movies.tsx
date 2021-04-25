import * as React from 'react';
import movieApi from '../../services/movieApi/movie';
import Carousel from '../../components/Carousel/Carousel';
 

interface Movie {
    poster_path: string;
    title: string;
}

const Movies = () => {
    const [popularMovies, setPopularMovies] = React.useState<Array<Movie>>(null);
    const [topRatedMovies, setTopRatedMovies] = React.useState<Array<Movie>>(null);
    const [upcomingMovies, setUpcomingMovies] = React.useState<Array<Movie>>(null);

    const fetchPopularMovies = async () => {
        const response = await movieApi.getPopularMovies();
        setPopularMovies(response.results);
    };

    const fetchTopRatedMovies = async () => {
        const response = await movieApi.getTopRatedMovies();
        setTopRatedMovies(response.results);
    };

    const fetchUpcomingMovies = async () => {
        const response = await movieApi.getUpcomingMovies();
        setUpcomingMovies(response.results);
    };



    React.useEffect(() => {
        fetchPopularMovies();
        fetchTopRatedMovies();
        fetchUpcomingMovies();
    }, []);

    return (
        <div>
            <Carousel items={popularMovies} sectionTitle='Popular Movies' type='movie' />
            <Carousel items={topRatedMovies} sectionTitle='Top Rated Movies' type='movie' />
            <Carousel items={upcomingMovies} sectionTitle='Upcoming Movies' type='movie' />
        </div>
    )
};

export default Movies;