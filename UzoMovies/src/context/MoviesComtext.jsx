import { createContext, useState } from "react";
import axios from 'axios'
const movieContext = createContext()

export const MovieProvider = ({children}) =>{
    const [movies, setMovies] = useState([])

    const fetchMovies = () => {
        
        const options = {
            method: 'GET',
            
        };
        
        fetch('https://api.themoviedb.org/3/trending/all/week?api_key=62ebbf5e93d522fc99a348d562cd3577', options)
            .then(response => response.json())
            .then(response => 
                setMovies(response.results)
               )
            .catch(err => console.error(err));
        
    }

return <movieContext.Provider value={{
movies,
fetchMovies
}}>
    {children}
</movieContext.Provider>
}

export default movieContext