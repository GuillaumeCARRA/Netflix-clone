// !i have to put .env at the root of the project
// !because if i dont do that my var is undefined
require('dotenv').config();
// the api key of tmdb we give us
// I have to add ub front of the variable REACT_APP
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY; 


// the different endpoint of tmdb we give us
// we dont have the beginning of the url because
// we make this request in our file axios.js
const requests = {
    fecthTrending:`/trending/all/week?api_key=${REACT_APP_API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${REACT_APP_API_KEY}&with_networks=213`,
    fecthTopRated:`/movie/top_rated?api_key=${REACT_APP_API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=35`,
    fecthHorrorMovies:`/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=27`,
    fecthRomanceMovies:`/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=10749`,
    fectDocumentaries:`/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=99`,
}

export default requests; 