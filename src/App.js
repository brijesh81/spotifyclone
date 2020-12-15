import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login/Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './components/Login/Player';

const spotify = new SpotifyWebApi();

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
      setToken(_token);

      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        console.log('user', user);
      })
    }
  });

  return (
    <div className="app">
      {
        token ? (
          <Player/>
        ) :
        (
          <Login/>
        )
      }
    </div>
  );
}

export default App;
