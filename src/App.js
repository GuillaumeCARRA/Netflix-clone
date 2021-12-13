import React from 'react';
import { 
    BrowserRouter as Router, 
    Routes, 
    Route 
} from 'react-router-dom';
import './App.css';
import HomeScreen from './components/HomeScreen';
import Login from './components/Login';

// Router = look at the page route that you're on and determine
// based on whatever's inside of this and render the good components

// Routes(Switch) = The <Routes /> component will only render the first route that matches/includes the path.

// Route= it's gonna render whatever's inside here

// ! with "react-router-dom" v6 it's not Switch but Routes
// ! and for show the component with Route 
// ! = <Route exact path="/" element={<Component />} />

function App() {

  const user = null; 

  return (
   
    <div className="App">
      <Router>
        {!user ? (
        <Login />
        ) : (
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
        </Routes>
        )}
       </Router> 
    </div>
   
  );
}

export default App;
