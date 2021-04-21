import axios from 'axios';


const apiKey = 'd8862dd490c5a0eee2e11969564ca8e7';

const movieApi = () => {
    const getPopularMovies = async () => {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
       try {
           const response = await axios.get(url);
           return response.data;
       } catch (error){
        throw error;
       }
    };

    const getTopRatedMovies = async () => {
        const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;
       try {
           const response = await axios.get(url);
           return response.data;
       } catch (error){
        throw error;
       }
    };

    const getUpcomingMovies = async () => {
        const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`;
       try {
           const response = await axios.get(url);
           return response.data;
       } catch (error){
        throw error;
       }
    };

    const getPopularSeries = async () => {
        const url = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`;
       try {
           const response = await axios.get(url);
           return response.data;
       } catch (error){
        throw error;
       }
    };

    const getTopRatedSeries = async () => {
        const url = `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=en-US&page=1`;
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error){
         throw error;
        }
    };

    const getOnTheAirSeries = async () => {
        const url = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${apiKey}&language=en-US&page=1`;
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error){
         throw error;
        }
    };

    return {
        getPopularMovies,
        getTopRatedMovies,
        getUpcomingMovies,
        getPopularSeries,
        getTopRatedSeries,
        getOnTheAirSeries
    }
};

export default movieApi();