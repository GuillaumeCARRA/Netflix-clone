import React from 'react';
import './SignUpScreen.css'

function SignUpScreen() {
    return (
        <div className="signup">
            <form>
                 <h1>Sign In</h1>
                 <input type="email" placeholder="enter your email address"/>
                 <input type="password" placeholder="enter your password"/>
                 <button type="submit">Sign In</button>

                 <h4>
                     <span className="signup__gray">New to Netflix ?</span> 
                     <span className="signup__link"> Sign Up now.</span>
                 </h4>
            </form>
        </div>
    )
}

export default SignUpScreen;
