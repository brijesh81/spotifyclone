import { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login/Login';
import { getTokenFromUrl } from './spotify';

function App() {

  const [token, setToken] = useState();

  // run code based on a condition
  useEffect(() => {
    //code..
    // gets the token details after authorization
    const hash = getTokenFromUrl();
    window.location.hash = '';

    // reads h access token from the hash value
    const _token = hash.access_token;

    // sets the value to the token state
    if (_token) {
      setToken(_token)
    }
  });

  return (
    <div className="app">
      {
        token ? (
          <h1>I am logged in</h1>
        ) :
        (
          <Login/>
        )
      }
    </div>
  );
}

export default App;
