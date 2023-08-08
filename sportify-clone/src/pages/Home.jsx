import { Link, useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import SpotifyContext from "../context/SpotifyContext"
import Login from "./Login"
import SpotifyWebApi from 'spotify-web-api-js';
import Player from "./Player";

const spotify = new SpotifyWebApi()


const Home = () => {

 
  const {getTokenFromUrl} = useContext(SpotifyContext)
  const [token, setToken] = useState(null)
 const [user, setUser] = useState(null)
  useEffect(()=>{
    const hash = getTokenFromUrl()
    window.location.hash = ''
    const _token = hash.access_token

    if(_token){
      setToken(_token)
      spotify.setAccessToken(_token)

      spotify.getMe().then(user =>{
        setUser(user)
        
      })
    }

    ;
  }, [])

  return (
    <>
  {token ? (
    <Player/>
  ) : (
    <Login/>
  )
}
</> 
  )
}

export default Home