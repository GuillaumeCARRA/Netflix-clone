import React, {useState, useEffect} from 'react';
import './Nav.css';

function NavBar() {

    // for change the navbar when we scroll
    // first is the white and when we scroll is go black
    // we start at false because we when that when the website upload
    // butr when we scroll we want the navbar go black
    const [show, setShow] = useState(false);

    const transitionNavBar = () => {
        // vertical scroll
        if (window.scrollY > 100) {
            setShow(true);
        } else {
            setShow(false);
        }
    }

    // [] empty array = he runs when the comonent upload
    // [not empty] if it's not empty he runs whe the component upload and when the props change
    useEffect(() => {
        // we listen in the window with addEventListener
        // we to give the event "scroll" and our function.
        window.addEventListener("scroll", transitionNavBar);

        // we clean up the event, it's good practice when we used a listener
        return() => window.removeEventListener("scroll", transitionNavBar);
    }, [])

    return (
        // only render the nav__black class 
        // when the show var is true  
        <div className={`nav ${ show && "nav__black"}`}>
          <div className="nav">
            <div className="nav__contents">
                <img 
                    className="nav__logo"
                    src="https://www.numerama.com/wp-content/uploads/2016/06/netflix-nouveau-logo.jpg" 
                    alt="netflix logo" 
                />
            
                <img 
                    className="nav__avatar"
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png" 
                    alt="avatar logo" 
                />
            </div>
          </div>
        </div>
        
    )
}

export default NavBar;
