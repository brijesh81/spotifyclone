import { useEffect } from 'react';
import './App.css';
import Login from './components/Login/Login';
import { getTokenFromUrl } from './spotify';

function App() {

  // run code based on a condition
  useEffect(() => {
    //code..
    const token = getTokenFromUrl();
  });

  return (
    <div className="app">
      {/* Spotify logo */}
      {/* Login with sotify button */}
      <Login/>
    </div>
  );
}

export default App;
