export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "193501e9bbb043b4a5fa7a84308f5158";

const scopes = [
 "user-read-currently-playing",
 "user-read-recently-played",
 "user-read-playback-state",
 "user-top-read",
 "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
 return window.location.hash          // go to location where # start in Url
 .substring(1)                        // chopping string, get the first chopped string 
 .split('&')                          // fino a dove trova &
 .reduce((initial, item) => {           // adesso dobbiamo prendere solo il numero
  let parts = item.split('=');          // splitta la Url dall' =
  initial[parts[0]] = decodeURIComponent(parts[1]);
  return initial;
 }, {});                                 // {}  --> what initial should start   IMPORTANT!!!                      
};

export const accessUrl = ` ${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true `;