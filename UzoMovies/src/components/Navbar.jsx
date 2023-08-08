import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import navbarContext from '../context/NvabarContext'

const Navbar = () => {
    const {searchBox, handleClick, search, clicked, active, 
    handleActive, handleTwoFunc} = useContext(navbarContext)
  return (<>
    <div className='bg-gray-800'>
    <div className="container mx-auto flex items-center justify-between">
        {/* title */}
    <div className='flex m-3'>
        <Link to='/' className='text-gray-300 text-3xl'>UzoMovies</Link>
        <button></button>
    </div>
    {/* serach bar */}

    {searchBox && <div className='hidden md:block ml-6 relative'>
        <input type="text" name="text" id="text"
         className='w-96 h-9 text-lg text-gray-400 bg-gray-700 
         focus:outline-none hover:bg-gary-500 hover:text-gray-300
          rounded-lg p-2 text-center ' />
        <Link to='/' className='absolute top-1 left-2 w-7 h-9 text-lg
        hover:translate-x-1 transform rounded-lg
        text-2xl text-gray-300' onClick={clicked}>
            <i class="fa-solid fa-magnifying-glass"> </i></Link>
    </div>}
    
        {/* pages */}
        {search &&
    <div className='hidden md:flex space-x-5 text-lg text-gray-300'>
        <Link to='/' className='hover:text-gray-400 hover:translate-y-1'>Home</Link>
        <Link to='/about' className='hover:text-gray-400 hover:translate-y-1'>About</Link>
        <Link to='/favorite' className='hover:text-gray-400 hover:translate-y-1'>Favorite</Link>

      <button type="submit" className='text-gray-300 text-lg
         hover:text-gray-400 hover:translate-y-1' 
         
        onClick={handleClick} >Search</button>
        </div>}

        {active && <button type="submit" className='text-white text-2xl 
        md:hidden mr-3' onClick={handleActive} ><i class="fa fa-bars"></i></button>}

        {!active && <button type="submit" className='text-white text-2xl 
        md:hidden mr-3' onClick={handleActive}><i class="fa fa-x"></i></button>}
</div>
{!active &&  <div className='flex flex-col items-center text-2xl
gap-7 text-gray-300'>
        <Link to='/' className='hover:text-gray-400 hover:translate-y-1'>Home</Link>
        <Link to='/about' className='hover:text-gray-400 hover:translate-y-1'>About</Link>
        <Link to='/favorite' className='hover:text-gray-400 hover:translate-y-1'>Favorite</Link>

      <button type="submit" className='text-gray-300 text-2xl
         hover:text-gray-400 hover:translate-y-1' 
         
        onClick={handleTwoFunc} >Search</button>
        </div>}
    </div>
     {searchBox && <div className='md:hidden mt-2 ml-16 relative'>
     <input type="text" name="text" id="text"
      className='w-96 h-9 text-lg text-gray-800 bg-gray-200
      focus:outline-none hover:bg-gray-500 hover:text-gray-900
       rounded-lg p-2 text-center ' />
     <Link to='/' className='absolute top-1 left-2 w-7 h-9 text-lg
     hover:translate-x-1 transform rounded-lg
     text-2xl text-gray-700' onClick={clicked}>
         <i class="fa-solid fa-magnifying-glass"> </i></Link>
 </div>}
 </>
  )
}

export default Navbar