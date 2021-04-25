import * as React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import movieApi from '../../services/movieApi/serie';

const TvSeries = () => {
    const [popularSeries, setPopularSeries] = React.useState(null);
    const [topRatedSeries, setTopRatedSeries] = React.useState(null);
    const [onTheAirSeries, setOnTheAirSeries] = React.useState(null);

    const fetchPopularSeries = async () => {
        const response = await movieApi.getPopularSeries();
        setPopularSeries(response.results);
    };

    const fetchTopRatedSeries = async () => {
        const response = await movieApi.getTopRatedSeries();
        setTopRatedSeries(response.results);
    };

    const fetchOnTheAirSeries = async () => {
        const response = await movieApi.getOnTheAirSeries();
        setOnTheAirSeries(response.results);
    };

    React.useEffect(() => {
        fetchPopularSeries();
        fetchTopRatedSeries();
        fetchOnTheAirSeries();
    }, [])

    return (
        <div>
            <Carousel items={popularSeries} sectionTitle='Popular Series' type='serie'/>
            <Carousel items={topRatedSeries} sectionTitle='Top Rated Series' type='serie' />
            <Carousel items={onTheAirSeries} sectionTitle='On The Air Series' type='serie' />
        </div>
    )
};

export default TvSeries;