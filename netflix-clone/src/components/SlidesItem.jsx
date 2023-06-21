import { useState, useEffect } from 'react'
import '../css/slides.scss'
import {FaPlay, FaArrowDown, FaPlus} from 'react-icons/fa'



const SlidesItem = ({item, id}) => {

  const [movieItem, setMovieItem]=useState(null)
  const [ishovered, setIshovered] = useState(false);
  const {name, backdrop_path, title, original_title, poster_path} = item

  const handleMouseEnter=()=>{
    setMovieItem(item)
   setIshovered(true)
  }
       
  const handleMouseLeave =()=>{
    setMovieItem(null)
    setIshovered(false)
   
    
  }

 
  return (



<div className={`w-1/5 h-44 rounded-xl shrink-0 pl-1`} 
 onMouseEnter={handleMouseEnter}
       onMouseLeave={handleMouseLeave}>


          <img className='w-full h-full'
   src={`https://image.tmdb.org/t/p/original/${backdrop_path || poster_path
  }`} alt="item"  />

   
   
{ishovered && (
    <div className='movieitem rounded-lg bg-gray-600 translate-x-0 z-50' id={id} >
      <img  src={`https://image.tmdb.org/t/p/original/${movieItem.backdrop_path || movieItem.poster_path
  }`} alt="item" className='w-full rounded-t-lg'/>
   <div className={` p-5 w-full   
 `}>
    <div className='flex justify-between'>
      <div className='flex gap-3'>
      <button className='w-12 h-12 rounded-full
      flex justify-center items-center bg-transparent 
      bg-white text-xl text-black'><FaPlay/></button>
      <button  className='w-12 h-12 rounded-full
      flex justify-center text-xl items-center bg-transparent border border-white text-white'><FaPlus/></button>
      </div>
      <button  className='w-12 h-12 rounded-full
      flex justify-center text-xl items-center bg-transparent border border-white text-white'><FaArrowDown/></button>
      </div>
    <h1 className='text-2xl pt-3 text-white'>{title ||
    original_title 
    ||
    name}</h1>
  </div>
    </div>

   )}
 
     
         
   </div> 

      
  )
}

export default SlidesItem



// {movieItems.map(item =>(
//   item.backdrop_path && (<div key={item.id} className={` z-10
//   shrink-0   group ${
//    hoveredMovieId === item.id ? '' 
//   : ''}`}>
//     <img  onMouseEnter={()=>handleMovie(item)}
//     onMouseLeave={handleMouseLeave} 
//     className={`group-hover:h-64  `}

//    //  lassName={`h-auto w-full opacity-100
//    //  transition ease-in-out delay-150 hover:-translate--4 hover:translate-y-4 hover:scale-150  ${
//    //   hoveredMovieId === item.id ? 'scale-150 translate-y-4 translate-x-4 origin-center' 
//    //  : ''}`}

//       src={`https://image.tmdb.org/t/p/original/${item.backdrop_path && item.backdrop_path}`} 
//      alt="item"
//      />
//         {/* {hoveredMovieId === item.id && ( */}
       
//       {/* )} */}
//   </div>)
//    ))}