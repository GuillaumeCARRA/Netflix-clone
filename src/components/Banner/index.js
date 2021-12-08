import React from 'react';
import './Banner.css';

function Banner() {

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
            backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1280px-Black_flag.svg.png")`,
            // they keep center when we change the size of the window
            backgroundPosition: "center center",
         }}
        >
          <div className="banner__contents">
            <h1 className="banner__title">
                Movie Name
            </h1>
            <div className="banner__buttons">
                <button className="banner__button">Play</button>
                <button className="banner__button">My List</button>
            </div>
            <h1 className="banner__description">
                {truncate(`This is a test description This is a test description
                This is a test description
                This is a test description This is a test description
                This is a test description
                This is a test description
                This is a test description
                This is a test description
                This is a test description
                This is a test description
                 This is a test description
                  This is a test description`, 150)}
                  {/* 150 is the character limit */}
            </h1>
          </div>

          <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner;
