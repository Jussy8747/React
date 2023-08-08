import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import SpotifyContext from "../context/SpotifyContext"

const Login = () => {
  const { loginUrl} = useContext(SpotifyContext)

  return (
    <div className="flex flex-col bg-black h-screen justify-between">
    <div className="flex flex-col items-center h-3/6 justify-between">
     <div className="">
     <img src="
     data:image/png;base64,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
    " alt="image" 
    />
    </div>
   <div>
    <p className=" text-white text-2xl mb-10"> Welcome to Spotify clone app by Justice</p>
    </div>
    </div>
<div className="flex justify-around mb-20 mx-10">
   <div>
     <a href={loginUrl} className="
     text-white
     bg-green-500
     p-2
     mr-3
     rounded-3xl
     text-xl"
     >Login with Spotify</a>
   </div>

   <div>
     <Link to="/signup"
     className="
     text-white
     bg-green-500
     p-2
     ml-3
     rounded-3xl
     text-xl
     "
     target="_blank"
     >Sign up with Spotify</Link>
</div>
</div> 
</div>
  )
}

export default Login