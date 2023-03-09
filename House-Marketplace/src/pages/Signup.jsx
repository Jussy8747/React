import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {getAuth, 
  createUserWithEmailAndPassword,
   updateProfile} from 
'firebase/auth'
import {
  setDoc,
  doc,
  
} from 'firebase/firestore'
import {toast} from 'react-toastify'
import {db} from '../Firebase.config'
import Oauth from '../Components/Oauth'
const Signup = () => {

  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData]  = useState({
    email: '',
    password: '',
    name: ''
  })
  const data = {
    timestamp: new Date()
  };
  
  const onsubmit = async (e) =>{
e.preventDefault()

try {
  const auth = getAuth()

  const userCredential = await createUserWithEmailAndPassword(
  auth, email, password)

  const user = userCredential.user

  updateProfile(auth.currentUser, {
    displayName: name
  })
  const formDateCopy = {...formData}
 delete formDateCopy.password
 formDateCopy.timestamp = data

 await setDoc(doc(db, 'users', user.uid), formDateCopy)
  nav('/')
} catch (error) {
  toast.error('somthing went wrong')
}
  }
  
  const {email, password, name} = formData

  const nav = useNavigate()

  const onchange = (e)=>{
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value 
    }))
  }

  return (
    <>
    <div className="pageContainer">
      <header>
        <p className="pageHeader">
          wellcome back
        </p>
      </header>
       
        <form onSubmit={onsubmit}>

        <input type="text"
          placeholder='name' id='name' 
          value={name} onChange={onchange} 
          className="nameInput" />


          <input type="email"
          placeholder='email' id='email' 
          value={email} onChange={onchange}
           className="emailInput" />

          <div className="passwordInputDiv">
            <input type={showPassword ? 'text' :'password' } 
            className='passwordInput' placeholder='Password' 
            value={password} onChange={onchange} id='password'/>
            <div className='showPassword'  onClick={()=>
             setShowPassword(prev => !prev)}>
           <svg xmlns="http://www.w3.org/2000/svg"
             height="24px" viewBox="0 0 24 24" width="24px"
             fill="#000000"><path d="M0 0h24v24H0z"
             fill="none"/><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73
             4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 
            17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 
            0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
            /></svg>
            </div>
          </div>
          <Link to='/forgetPassword' className='forgotPasswordLink'>
            Forgot Password
          </Link>
          <div className="signUpBar">
            <p className="signUpText">
              Sign Up
            </p>
            <button type='submit' className='signUpButton'>
            <svg xmlns="http://www.w3.org/2000/svg" height="34px" 
            viewBox="0 0 24 24" width="34px" fill="#ffffff"><path d="M0 0h24v24H0V0z"
             fill="none"/><path 
            d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
            </button>
          </div>
        </form>


        <Oauth/>

  <Link to='/signin'
   className='registerLink' > Sign In instead
   </Link> 
   <Link to='/signin' className='registerLink' > Sign up instead</Link> 
    </div>
    </>
  )
}

export default Signup