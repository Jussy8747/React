
import '../css/Home.css'
import {  useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Home = () => {
const [email, setEmail] = useState('') 
const nav = useNavigate()
    const onClick= ()=>{
        nav('/signup')
    }

  return (
   
    <div className='h-screen '>
    <div className="home min-h-screen ">
    <div className='flex justify-between px-1 md:px-4'>
        <div className='font-bold text-xl md:text-4xl'>
            <h1 className='text'>NETFLIX</h1>
        </div>

        <div className='link w-22 h-10 px-4 py-2
        font-bold rounded'>
            <Link to='/signin'>Sign In</Link>
        </div>
    </div>
    <div className='mt-24 md:mt-32 ml-10'>
        <h1 className='text-3xl md:text-5xl font-bold'>
            Unlimited movies, TV shows, <br /> and more
        </h1>
        <h3 className='my-6 text-3xl font-bold'>
            Watch anywhere. Cancel anytime.
        </h3>
        <p className='text-2xl font bold'>
            Ready to watch? Enter your email to create or restart your membership
        </p>
        <div className='flex flex-col items-center md:flex-row md:mt-3 mb-4'>
        <input type="email" name='email' value={email} placeholder='Email'
        onChange={(e)=>{
           setEmail(e.target.value)
        }} className='p-3 text-white text-xl 
        h-14 w-80 md:w-96 my-5 mt-16 md:m-0  border border-white
        bg-black opacity-50 rounded ' />
        <button onClick={onClick} className='h-14 w-64 md:48 md:ml-3 button
        p-3 rounded 
        text-xl font=bold'>Get Started
        </button>
    </div>
    </div>
    
  </div>
  </div>
  
  )
}

export default Home