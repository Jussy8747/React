import { createContext } from "react"

const SpotifyContext = createContext()

export const SportyProvider = ({children}) =>{

    const authEndpoint = "https://accounts.spotify.com/authorize"
    const redirectUrl = "http://localhost:5173/"
    const clientId = "35cce0543b804451a573ea660dd001dd"
    const scopes = [
        'user-read-currently-playing',
        'user-read-recently-played',
        'user-read-playback-state',
        'user-top-read',
        'user-modify-playback-state',
    ]

    const getTokenFromUrl = ()=>{
        return window.location.hash
        .substring(1)
        .split("&")
        .reduce((init, item) =>{
            let parts = item.split('=')
            init[parts[0]] = decodeURIComponent(parts[1])
            return init
        }, {})
    } 

    const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`

    return <SpotifyContext.Provider value={{
loginUrl,
getTokenFromUrl
    }}>
{children}
    </SpotifyContext.Provider>
}


export default SpotifyContext