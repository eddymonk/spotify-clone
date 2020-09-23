import React, {useEffect} from 'react';
import '../css/App.css';
import Login from './Login';
import Player from './Player';

import {getTokenFromUrl} from '../spotify';
import SpotifyWebApi from "spotify-web-api-js";
import {useDataLayerValue} from './DataLayer';


// I need to install npm i spotify-web-api-js che ci permette di wrappare l'API e semplificare la comunicazione con esso 

const spotify = new SpotifyWebApi(); // creating instance of spotify inside our app 

function App() {

  //const [token, setToken] = useState(null)--> useState permette di memorizzare dopo il refresh, metto sotto
  const [{token}, dispatch] = useDataLayerValue();  // This line can put everything into DataLayer[user]


  // Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash="";          // cleaning the url

    const _token = hash.access_token;

    if(_token) {

      spotify.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token); // giving access token to spotify api

      spotify.getMe().then((user)=>{
        
        dispatch({
          type: 'SET_USER',
          user: user,               //Shooting it right into Data Layer
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists,
        });
      });

      //Get discover weekly fees
      spotify.getPlaylist('37i9dQZF1EppgeGU61UusU').then(response=> {
        dispatch({
          type:'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        });
      });

    }

  }, [token, dispatch]);
  
  return (
    <div className="app">
      {!token && <Login />}
      {token && <Player />}
    </div>
  );
};

export default App;
