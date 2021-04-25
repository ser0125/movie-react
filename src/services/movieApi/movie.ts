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

    const getMovieDetail = async (id) => {
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error){
         throw error;
        }
    };

    const getYoutubeTrailer = async (id) => {
        const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`;
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
        getMovieDetail,
        getYoutubeTrailer,
    }
};

export default movieApi();