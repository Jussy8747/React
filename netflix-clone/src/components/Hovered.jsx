import { useContext } from 'react'
import {FaPlay, FaArrowDown, FaPlus} from 'react-icons/fa'
import mainpageContext from '../context/MainPageContext'

const Hovered = () => {
  const {hovermovieItem} = useContext(mainpageContext)
    const {name, backdrop_path, title, original_title, poster_path, id} = hovermovieItem

    
      return (
        <div className='movieitem rounded-lg bg-gray-600 z-50' id={id}  style={{
       }}>
          <img  src={`https://image.tmdb.org/t/p/original/${backdrop_path || poster_path
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
    
       )

}

export default Hovered