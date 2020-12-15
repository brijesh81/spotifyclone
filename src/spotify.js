// https://developer.spotify.com/
// documentation/web-playback-sdk/quick-start///#endregion

export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000";

const clientId = "199fc69c26c24958885cfbc6fc56cded";

//scopes that users can access
const scopes = [
    "user-read-currently-playing",
    "user-react-recently-plaing",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

// url to be sent to the spotify for authorization
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scopes=${scopes.join("%20")}&response_type=token&show_dialog=true`;

// returns the details from the url that spotify returns after authorization 
export const getTokenFromUrl = () => {
    return window.location.hash
    .substr(1).split('&').reduce((initial, item) => {
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1])
        return initial
    }, {})
}