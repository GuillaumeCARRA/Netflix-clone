import React, { useState } from 'react';
import SignUpScreen from '../SignUpScreen';
import './Login.css';

function Login() {

// state for when we click in sign in
// a new window appear for sign up to the website
const [signIn, setSignIn] = useState(false); 

    return (
        <div className="login">
           
            <div className="login__bg">
                <img 
                    className="login__logo"
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                    alt="netflix logo" 
                />
                <button 
                    className="login__button"
                    onClick={() => setSignIn(true)}
                >
                    Sign In
                </button>

                <div className="login__gradient" />
            </div>
            <div className="login__body">
              {/* condition for show the login screen */}
              {signIn ? (<SignUpScreen />) : (
                 <>
                 <h1>Unlimited films, TV programms and 
                 more.</h1>
                 <h2>Watch anywhere. Cancel at any time</h2>
                 <h3>
                     Ready to watch ? Enter your email to 
                     create or restart your 
                     membership.
                 </h3>
                <div className="login__input">
                     <form>
                         <input type="email" placeholder="enter your email address"/>
                         <button 
                             className="login__getStarted"
                             onClick={() => setSignIn(true)}
                         >
                             Get Started
                         </button>
                     </form>
                </div>
                </> 
              )}
              
            </div>
        </div>
    )
}

export default Login;
