import {useState} from 'react'
import { Link } from 'react-router-dom'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import { toast } from 'react-toastify'
import { async } from '@firebase/util'


const ForgotPassword = () => {
  const [email, setEmail] = useState('')

const onchange = (e) =>{
setEmail(e.target.value)
}

const onsubmit = async (e) =>{
e.preventDefault()
try {
  const auth = getAuth()
  await sendPasswordResetEmail(auth, email)
  toast.success('Email was sent')
} catch (error) {
  toast.error('Somthing went wrong')
}
}

  return (
    <div className='pageContainer'>
     <header>
      <p className="pageHeader">Forget Password</p>
      </header> 
      <main>
        <form onSubmit={onsubmit}>
          <input type="email" id="email" className="emailInput"
          value={email} onChange={onchange} placeholder='Email' />
          <Link to='/signin' className='forgotPasswordLink' >Sign In</Link>

          <div className="signInBar">
            <div className="signInText">Send Reset Link</div>
            <button className='signInButton' >
            <svg xmlns="http://www.w3.org/2000/svg" height="34px" 
            viewBox="0 0 24 24" width="34px" fill="#ffffff"><path d="M0 0h24v24H0V0z"
             fill="none"/><path 
            d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
            </button>
          </div>
        </form>
      </main>
   </div>
  )
}

export default ForgotPassword