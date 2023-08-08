import SpotifyWebApi from 'spotify-web-api-js';
import { SpotifyAuth, Scopes } from 'react-spotify-auth';


const spotifyApi = new SpotifyWebApi();

const registerUser = async () => {
  const user = await spotifyApi.createUser();
  console.log(user);
};

const SignUp = () => {
  return (
    <SpotifyAuth
      clientID="35cce0543b804451a573ea660dd001dd"
      redirectUri="http://localhost:5173/callback"
      onAccessToken={(token) => {
        spotifyApi.setAccessToken(token);
      }}
    >
      <button onClick={registerUser}>Register User</button>
    </SpotifyAuth>
  )
}

export default SignUp