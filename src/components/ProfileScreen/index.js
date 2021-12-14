import React from 'react';
import { useSelector } from 'react-redux'; 
import { selectUser } from '../../features/userSlice';
import { auth } from '../../firebase';
import Nav from '../NavBar'; 
import './profileScreen.css'; 

function ProfileScreen() {

    // we want to select the user information
    // we pushed that into redux
    // with useSelector we can access to the informations
    // selectUser = we grab the user from the store
    const user = useSelector(selectUser); 

    return (
        <div className="profileScreen">
            <Nav />
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img 
                        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" 
                        alt="avatar profile"
                    />
                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans">
                            <h3>Plans</h3>
                            <button onClick={() => auth.signOut()} className="profileScreen__signOut">Sign out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen; 
