import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    BrowserRouter as Router, 
    Routes, 
    Route 
} from 'react-router-dom';
import './App.css';
import HomeScreen from './components/HomeScreen';
import Login from './components/Login';
import ProfileScreen from './components/ProfileScreen'; 
import { auth } from './firebase'; 
import { login, logout, selectUser } from './features/userSlice'; 

// Router = look at the page route that you're on and determine
// based on whatever's inside of this and render the good components

// Routes(Switch) = The <Routes /> component will only render the first route that matches/includes the path.

// Route= it's gonna render whatever's inside here

// ! with "react-router-dom" v6 it's not Switch but Routes
// ! and for show the component with Route 
// ! = <Route exact path="/" element={<Component />} />

function App() {

  const user = useSelector(selectUser); 
  const dispatch = useDispatch();

  // is going to listen to the user's logged in
  useEffect(() => {
    // it's listen at any authentication state changed 
    // when we refresh it's store to our local memory in our browser
    // he popped a cookie and he knows we are logged in from before
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      // if the user exist
      if (userAuth) {
        // Logged in
        console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else {
        // Logged out 
        dispatch(logout());
      }
    });
    // clean up the function 
    return unsubscribe; 
  }, [dispatch])

  return (
   
    <div className="App">
      <Router>
        {!user ? (
        <Login />
        ) : (
        <Routes>
          <Route path="/profile" element={<ProfileScreen />}/>
          <Route exact path="/" element={<HomeScreen />} />
        </Routes>
        )}
       </Router> 
    </div>
   
  );
}

export default App;
