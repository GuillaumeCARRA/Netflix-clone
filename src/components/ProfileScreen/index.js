import React from 'react';
import { useSelector } from 'react-redux'; 
import { selectUser } from '../../features/userSlice';
import { auth } from '../../firebase';
import Nav from '../NavBar'; 
import PlansScreen from '../PlansScreen';
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
                        src="https://cutewallpaper.org/24/png-avatar/filenetflixavatarpng-wikimedia-commons.png" 
                        alt="avatar profile"
                    />
                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans">
                            <h3>Plans</h3>
                            <PlansScreen />
                            <button onClick={() => auth.signOut()} className="profileScreen__signOut">Sign out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen; 
