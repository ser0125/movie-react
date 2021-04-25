import * as React from 'react';
import movieApi from '../../../services/movieApi/movie';
import Carousel from '../../../components/Carousel/Carousel';
import { useParams } from 'react-router-dom';
import { IMAGE_URL } from '../../../utils/constants';
import classes from './Detail.css';

interface MovieDetail {
    id: number;
    title: string;
    vote_average: number;
    vote_count: number;
    release_date: string;
    overview: string;
    genres: Array<{
        id: number;
        name: string
    }>;
    poster_path: string;
}

const MovieDetail = () => {
    let { id } = useParams();
    const [movieDetail, setMovieDetail] = React.useState<MovieDetail>(null);

    const fetchDetailMovie = async () => {
        const response = await movieApi.getMovieDetail(id);
        setMovieDetail(response);
    };


    React.useEffect(() => {
        fetchDetailMovie();
    }, []);

    return (
        <div className={classes.Container}>
            {
                movieDetail &&
                <div>
                    <h1>{movieDetail.title}</h1>
                    <img src={`${IMAGE_URL}/${movieDetail.poster_path}`} />
                </div>
            }
        </div>
    )
};

export default MovieDetail;