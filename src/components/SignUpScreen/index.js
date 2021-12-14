import React, { useRef } from 'react';
import { auth } from "../../firebase";
import './SignUpScreen.css'

function SignUpScreen() {

    // we have to capture the information form the sign in form
    // useRef = is going to point the html element
    const emailRef = useRef(null); 
    const passwordRef = useRef(null); 

    // we dont want the refresh of the page
    const register = (e) => {
        e.preventDefault();

        // we create an user with firebase method
        auth.createUserWithEmailAndPassword(
            // go to the email reference
            // pointing the current thing
            // and get the value of that
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        }).catch(error => {
            alert(error.message);
        })
    }

    // for authentication
    // e an argument because if it's get trigerred off a click 
    // it comes with this event
    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        }).catch(error => {
            alert(error.message);
        })
    }

    return (
        <div className="signup">
            <form>
                 <h1>Sign In</h1>
                 {/* we have to attach the ref for email */}
                 <input ref={emailRef} type="email" placeholder="enter your email address"/>
                 {/* we have to attach the ref for password */}
                 <input ref={passwordRef} type="password" placeholder="enter your password"/>
                 <button type="submit" onClick={signIn}>Sign In</button>

                 <h4>
                     <span className="signup__gray">New to Netflix ?</span> 
                     <span className="signup__link" onClick={register}> Sign Up now.</span>
                 </h4>
            </form>
        </div>
    )
}

export default SignUpScreen;
