import * as React from 'react';
import movieApi from '../../../services/movieApi/serie';
import Carousel from '../../../components/Carousel/Carousel';
import { useParams } from 'react-router-dom';
import { IMAGE_URL } from '../../../utils/constants';
import classes from './Detail.css';

interface SerieDetailType {
    id: number;
    name: string;
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

const SerieDetail = () => {
  const { id } = useParams();
  const [serieDetail, setMovieDetail] = React.useState<SerieDetailType>(null);

  const fetchDetailSerie = async () => {
    const response = await movieApi.getSerieDetail(id);
    setMovieDetail(response);
  };

  React.useEffect(() => {
    fetchDetailSerie();
  }, []);

  return (
        <div className={classes.Container}>
            {
                serieDetail &&
                <div>
                    <div>
                        <h1>{serieDetail.name}</h1>
                        <img src={`${IMAGE_URL}/${serieDetail.poster_path}`} />
                    </div>
                    <div>
                    <h4>{serieDetail.overview}</h4>
                    </div>
                </div>
            }
        </div>
  );
};

export default SerieDetail;
