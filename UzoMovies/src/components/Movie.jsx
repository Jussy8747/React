import React from 'react'

const Movie = ({movies}) => {

  const img = (poster)=>{
    return `https://image.tmdb.org/t/p/w500${poster}`
  }


const {title, poster_path, release_date } = movies
  return (
    <div className=' p-4 '>
 <div className='relative'>
        <img src={img(poster_path)} className='h-80 hover:-translate-y-6 transform
        transition duration-500 ease-in' alt="" />
        <span className='absolute bottom-0 text-2xl bold'>{release_date}</span>
    </div>
    </div>
    
   
   
  )
}

export default Movie