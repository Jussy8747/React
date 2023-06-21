import { useContext, useEffect, useState } from "react";
import {FaSearch} from "react-icons/fa";
import { FaPlay } from "react-icons/fa"
import { Link, useLocation } from "react-router-dom";
import mainpageContext from "../context/MainPageContext";
import Search from "../components/Search";
import '../css/Home.css'
// import Slides from "../components/Slides";
// import Banner from "../components/Banner";



const Kids = () => {

  const [movie, setMovie] = useState(null)


  const [show, setShow] = useState(false)
  const {
    searchText,
    showSearch,
    hideSearch,
    showsearch,
    handleClick ,
    handleChange,
  } = useContext(mainpageContext)
  
  const API_KEY = import.meta.env.VITE_API_KEY
  
   const transNav = ()=>{
    if(window.scrollY > 100){
      setShow(true)
    }else{
      setShow(false)
    }
   }


   const fetchBannerMovie = async ()=>{
    fetch(`https://api.themoviedb.org/3/discover/tv?with_genres=10762&include_adult=false&sort_by=popularity.desc&api_key=${API_KEY}&include_video=true&page=5`)
    .then(res =>{
      return res.json()
    })
    .then(data =>{
      setMovie(data.results[
        Math.floor(Math.random()*data.results.length-1)
    ])
    console.log(movie);
    })
    .catch(err =>{
      console.log(err);
    })
   }
  
   useEffect(()=>{
    fetchBannerMovie()
    window.addEventListener('scroll',transNav)
    return ()=>{
      window.removeEventListener('scroll',transNav)
    }

   }, [])
  
  
   const location = useLocation();
  
   
  
  const Active = (path) =>{
    return location.pathname === path ?
    'font-bold active:bg-white focus:outline-none' : '';
  }
  



function truncateString(str, maxLength) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength - 3) + '...';
  }
  return str;
}


  return (
    <div>
          <nav className="fixed left-0 top-0 z-10 ">
    <div className={`bg-gradient-to-b from-black to-transperate  ${show && 'bg-black'} w-screen 
    fixed flex text-white justify-between ease-in transition-all del
    p-5`}>
    <div className="flex gap-2">
      <div className="mr-10 fon"><Link to='/mainpage' className="
      text-3xl font-bold
      text">NETFLIX</Link></div>
      <div>
        <ul className="flex gap-5 items-center mt-2 text-sm">
          <li className={Active('/mainpage')}><Link to='/mainpage'
          className="hover:text-gray-400 hover:duration-300 ease-in
           delay-100"
          >Home</Link></li>

          <li className={Active('/tvshow')}><Link to='/tvshows'
          className="hover:text-gray-400 hover:duration-300 ease-in
           delay-100 text-sm"
          >Character</Link></li>

          <li className={Active('/tvshow')}><Link to='/tvshows'
          className="hover:text-gray-400 hover:duration-300 text-sm ease-in
           delay-100"
          >TV Shows</Link></li>

          <li className={Active('/movies')}><Link to='/movies'
          className="hover:text-gray-400 hover:duration-300 ease-in
           delay-100"
          >Movies</Link ></li>

          <li className={Active('/mylist')}><Link to='/mylist'
          className="hover:text-gray-400 hover:duration-300 ease-in
           delay-100"
          >My List</Link></li>

         
        </ul>
      </div>
    </div>

    <div className="flex gap-5 items-center mr-11">

     {showSearch && (<div>
    <div>
      <input type="text" placeholder=' title, people, genres
        '  className="bg-black border border-white
      w-72 h-9 p-2 pl-10 relative text-lg font-bold" value={searchText}
       onChange={handleChange}/>
  </div>
      
      <div onClick={hideSearch} className="absolute text-xl m-1 top-6"><FaSearch/></div>
     { 
     searchText !== '' && (<div className="absolute right-48 text-xl top-6 font-bold">
     <button onClick={handleClick}>X</button> </div>)
     } 
      </div>) }
      
     {!showSearch && (
         <button onClick={showsearch} className="text-xl"><FaSearch/></button>
     )}
      

     <div className="text-xl">
      <Link to='/profile' >
        <img src="https://occ-0-7218-2706.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABXWywqsWG3V9uBpjuOW_oq_KHlLqDjCkRTsKK0mILcPkwecm8MmxoSehYaIBOxIBHYT5GNFyp5BIGn-kHE8HLqwUvLxIi1o.png?r=f55"
         alt="kids" className="rounded w-8"/>
      </Link>
     </div>
      
    <button className="bg-red-700 w-24 text-sm h-8 rounded hover:bg-red-900">
        Exit Kids
    </button>
     </div>
      </div>
   </nav>

   {searchText !== '' ? <Search/> : (
      <>
       <header style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        
    }} className="object-contain banner">

   
   <div className=" text-white pt-40 ml-12 relative">

    
    <h1 className="
    text-3xl font-bold
    ">{movie?.title || movie?.name || movie?.original_name}</h1>


    <div className="w-96 my-3">
    <h1 className="
    text-xl 
    ">{truncateString(`${movie?.overview}`, 150)}</h1>
    </div>

    <div className="flex my-3">
        <button className="bg-white w-32 text-black 
        items-center flex justify-center text-xl h-12
        rounded gap-3"><FaPlay/> Play</button>
        <button className="bg-gray-500 w-40 text-white 
        items-center flex justify-center text-xl h-12 font-bold
        rounded gap-3 ml-3">My List</button>
    </div>
  
  
</div>
<div className="w-screen faded"></div>
   </header>

      {/* <Slides title='Only on Netflix' url={Request.fetchNetflixOriginal} />
      <Slides title='Top Rated Tv Show' url={Request.fetchTopRated} />
      <Slides title='Popular movies' url={Request.fetchPopularMovie} />
      <Slides title='Top Rated Movies' url={Request.fetchTopRatedMovies} />
      <Slides title='Upcoming Movies' url={Request.fetchUpcomingMovie} />
      <Slides title='Trending' url={Request.fetchTrending} />
     
      <Slides title='New Release movies' url={Request.fetchNewReleaseMovie} />
      <Slides title='Popular Tv Shows' url={Request.fetchPopularTv} />
      <Slides title='Action Tv Shows' url={Request.fetchActionTvShows} /> */}
      </>)}
    

    </div>
  )
}

export default Kids