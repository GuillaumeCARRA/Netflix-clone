import React, { useEffect, useState } from 'react';
import axios from '../../axios';
import './Row.css';

function Row({ title, fetchUrl, isLargeRow = false }) {

    //they carry the movie 
    const [movies, setMovies] = useState([]);
    console.log('je suis les films de map', movies);

    const base_url = "https://image.tmdb.org/t/p/original/"

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl])


    return (
        <div className='row'>
           <h2>{title}</h2>

           <div className="row__posters">
            {movies?.map(movie => (
               <img 
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id}
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                alt={movie.name}
               />
            ))}
           </div>
        
           

        </div>
    )
}

export default Row;
