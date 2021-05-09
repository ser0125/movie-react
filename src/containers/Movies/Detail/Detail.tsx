import * as React from 'react';
import movieApi from '../../../services/movieApi/movie';
import YoutubeEmbed from '../../../components/YoutubeEmbed/YoutubeEmbed';
import { useParams } from 'react-router-dom';
import { IMAGE_DETAIL_URL } from '../../../utils/constants';
import classes from './Detail.css';
import CirclePercentage from '../../../components/CirclePercentage/CirclePercentage';
import Genre from './Genre/Genre';
import { Link } from 'react-feather';

interface MovieDetailType {
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
    homepage: string;
}

interface YoutubeTrailer {
 key: string;
 name: string;
 site: string;
 size: number;
 type: string;
}

const MovieDetail = () => {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = React.useState<MovieDetailType>(null);
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
                <div className={classes.DetailContainer}>
                  <div className={classes.TitleInfo}>
                    <h1>{movieDetail.title}</h1>
                  {
                    movieDetail.genres.map((genre, id) => <Genre key={id} genre={genre}/>)
                  }
                  </div>
                  <div className={classes.PercentageContainer}>
                    <CirclePercentage percentageAverage={movieDetail.vote_average}/>
                    <h3>User<br/>Score</h3>
                    <h3>Total votes <br /><span>{movieDetail.vote_count}</span></h3>
                    <h3>Release Date <br /><span>{movieDetail.release_date}</span></h3>
                    <h3>Homepage <br /><a href={movieDetail.homepage} target="_blank" rel="noreferrer"><Link size={14}></Link></a></h3>
                  </div>
                  <div className={classes.ImageContainer}>
                        <img className={classes.ImagePoster} src={`${IMAGE_DETAIL_URL}/${movieDetail.poster_path}`} />
                  </div>
                  <div>
                        <YoutubeEmbed className={classes.YoutubeContainer} keyid={youtubeTrailer[0]?.key} />
                  </div>
                  <div className={classes.OverviewContainer}>
                      <h4>{movieDetail.overview}</h4>
                  </div>
                </div>
            }
        </div>
  );
};

export default MovieDetail;
