import * as React from 'react';
import movieApi from '../../../services/movieApi/movie';
import YoutubeEmbed from '../../../components/YoutubeEmbed/YoutubeEmbed';
import { useParams } from 'react-router-dom';
import { IMAGE_DETAIL_URL } from '../../../utils/constants';
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

interface YoutubeTrailer {
 key: string;
 name: string;
 site: string;
 size: number;
 type: string;
}

const MovieDetail = () => {
    let { id } = useParams();
    const [movieDetail, setMovieDetail] = React.useState<MovieDetail>(null);
    const [youtubeTrailer, setYoutubeTrailer] = React.useState<Array<YoutubeTrailer>>(null);

    React.useEffect(() => {
        fetchDetailMovie();
        fetchYoutubeTrailer();
    }, []);

    const fetchDetailMovie = async () => {
        const response = await movieApi.getMovieDetail(id);
        setMovieDetail(response);
    };

    const fetchYoutubeTrailer = async () => {
        const response = await movieApi.getYoutubeTrailer(id);
        setYoutubeTrailer(response.results);
    };

    return (
        <div className={classes.Container}>
            {
                movieDetail && youtubeTrailer &&
                <div>
                    <h1>{movieDetail.title}</h1>
                    <div className={classes.MediaContainer}>
                        <img className={classes.ImagePoster} src={`${IMAGE_DETAIL_URL}/${movieDetail.poster_path}`} />
                        <YoutubeEmbed keyid={youtubeTrailer[0].key} />
                    </div>
                </div>
            }
        </div>
    )
};

export default MovieDetail;