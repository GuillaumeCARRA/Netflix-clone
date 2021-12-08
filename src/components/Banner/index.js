import React, { useEffect, useState } from 'react';
import axios from '../../axios';
import requests from '../../request';
import './Banner.css';


function Banner() {

    // we want to fetch the movie
    const [movie, setMovie]= useState([]); 

    //useEffect for fetch the movie information
    useEffect(() => {
        async function fecthData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            console.log("je suis la requete: ", request);
            setMovie(
                request.data.results[
                    // first we want to generate a random number
                    // and it's gonna be from 0 to length of the results that come back
                    // example if we have 200 videos that come back
                    // we gonna get a number between 0 and 200 get dropped 
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
            return request;
        }

        fecthData();
    }, [])

    console.log("je suis les films: ", movie);

    // function for truncate the text when he is to long
    // at the end of the text they put ...
    // numCharacter rpz the number of character we want before
    // to cut them off and to put the 3 dot
    function truncate(string, numCharacter) {
        // string? return undefined if we dont have a string
        // optional chaining ?. allows in this case the string
        // to safely be null/undefined and not an error 
        // https://javascript.info/optional-chaining
        return string?.length > numCharacter ? string.substr(0, numCharacter - 1) + '...' : string; 
    }

    return (
        <header 
         className="banner" 
         style={{
            backgroundSize: "cover",
            // backdrop_path is the link of the image we want
            // example if i get this url https://image.tmdb.org/t/p/original//qw3J9cNeLioOLoR68WX7z79aCdK.jpg
            // i get the image for squid games
            // like that we can have a random image when the website upload
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            // they keep center when we change the size of the window
            backgroundPosition: "center center",
            
            
         }}
        >
          <div className="banner__contents">
            <h1 className="banner__title">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="banner__buttons">
                <button className="banner__button">Play</button>
                <button className="banner__button">My List</button>
            </div>
            <h1 className="banner__description">
                {truncate(movie?.overview, 200)}
                  {/* 150 is the character limit */}
            </h1>
          </div>

          <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner;
