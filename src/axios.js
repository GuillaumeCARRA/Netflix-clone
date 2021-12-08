// for making request to a server accross the internet
import axios from 'axios'; 
require('dotenv').config();

// when we make a request we can actually
// already append the beginning url
// example i can tell www.google.com/
// it's taking always the beginning to go where i want
const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3"
});

export default instance; 