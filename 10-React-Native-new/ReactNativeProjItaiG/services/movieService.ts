import axios from 'axios';

const API_KEY = '95eb7de40b6635b1d76fbba095ec9285'; 
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};