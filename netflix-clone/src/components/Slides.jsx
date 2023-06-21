import 'swiper/swiper-bundle.min.css';
import { useContext, useEffect, useRef, useState} from 'react';
import '../css/slides.scss'
import axios from 'axios';
import Loading from './Loading';
import SlidesItem from './SlidesItem';
import { v4 as uuidv4 } from 'uuid';
import {FaPlay, FaArrowDown, FaPlus} from 'react-icons/fa'

const Slides = ({title, url}) => {



  const [movieItems, setMovieItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [showLeftSlide, setShowLeftSlide] = useState(false)

  const [slideNum, setSlideNum] = useState(0)

useEffect(()=>{
  setLoading(true)
  const fetchItems = async () =>{
     const req = await axios.get(`https://api.themoviedb.org/3${url}`)
      setMovieItems(req.data.results)
  }
setLoading(false)
fetchItems()
}, [url])






const slideRef = useRef()

const handleClick = (side) =>{
  
  slideNum <= 1 && setShowLeftSlide(false)
if(side === 'right' && slideNum < Math.round(movieItems.length/5)){
  setSlideNum((prev)=> prev+1)
  setShowLeftSlide(true)

}
else if (side === 'left' && slideNum > 0) {
  setSlideNum((prev)=> prev-1)
  
}



}





    
    
    return (
      <>
{loading ? (
  <Loading/> 
) : (
  
  <div className=''>
  <h1 className='text-white font-bold ml-16 p-2 text-2xl'>{title}</h1>
  <div className=' flex justify-center group relative'>
  {showLeftSlide && <div className='slideHanler left-0 
  group-hover:text-white text-8xl flex justify-center items-center 
  text-transparent font-light
  ' onClick={()=>handleClick('left')}> &#8249;</div>}
      <div className='flex w-11/12 h-48' style={{ transform: `translateX(${slideNum * -100}%)` }}  ref={slideRef}> 
      
     {movieItems.map((item, index) =>{
     return ( <SlidesItem key={item.id}  item={item} id={index}/>)
   })}

   

     </div>
    
    <div className='slideHanler right-0
       group-hover:text-white text-8xl flex justify-center items-center
       text-transparent font-light z-10
     ' onClick={()=>handleClick('right')}>&#8250;</div>
 
        </div>
       
 
    
     
   </div>
)}
  </> 
  )
}

export default Slides