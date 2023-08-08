import React, { useContext, useEffect } from 'react'
import movieContext from '../context/MoviesComtext'
import Movie from './Movie'

const MovieList = () => {
const {movies, fetchMovies} = useContext(movieContext)

    useEffect(()=>{
fetchMovies()
    }, [])

  const obj = {
    adult
: 
false,
backdrop_path
: 
"/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
genre_ids
: 
(3) [28, 12, 878],
id
: 
505642,
media_type
: 
"movie",
original_language
: 
"en",
original_title
: 
"Black Panther: Wakanda Forever",
overview
: 
"Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
popularity
: 
6117.07,
poster_path
: 
"/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
release_date
: 
"2022-11-09",
title
: 
"Black Panther: Wakanda Forever",
video
: 
false,
vote_average
: 
7.479,
vote_count
: 
3041
  }
  return (
    <div className='bg-gray-900 h-screen'>

        {/* {movies.map(movie =>(
        <Movie key={movie.id} movies={movie}/>
        
    ))} */}
     <Movie  movies={obj}/>
    </div>
  )
}

export default MovieList