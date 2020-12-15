import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login/Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './components/Player/Player';
import { useDataLayerValue } from "./utils/DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  // get the user from the data layer
  const [{user, token, playlists}, dispatch] = useDataLayerValue();

  // run code based on a condition
  useEffect(() => {

    // gets the token details after authorization
    const hash = getTokenFromUrl();
    window.location.hash = '';

    // reads h access token from the hash value
    const _token = hash.access_token;

    // sets the value to the token state
    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        console.log('user', user);
        dispatch({
          type: 'SET_USER',
          user: user
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists
        });
      })

      console.log('play', playlists)
    }
  }, []);

  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify}/>
        ) : (
          <Login/>
        )
      }
    </div>
  );
}

export default App;
