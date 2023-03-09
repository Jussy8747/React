import React, {useEffect, useState} from 'react'
import { getAuth, updateProfile} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { updateDoc, doc} from 'firebase/firestore'
import { db } from '../Firebase.config'
import { async } from '@firebase/util'
import {toast} from 'react-toastify'
import { Link } from 'react-router-dom'
const Profile = () => {
  
  const auth = getAuth()
const nav = useNavigate()
  const [changeDetails, setChangeDetails] = useState(false)
  const [formData, setFormData] = useState({
  name: auth.currentUser.displayName,
  email: auth.currentUser.email
})

const {name, email} = formData
const onlogOut = () => {
auth.signOut()
nav('/')
} 

const onSubmit = async () =>{
  try {
    if(auth.currentUser.displayName !== name){
      await updateProfile(auth.currentUser, {
        displayName: name
      })

      const userRef = doc(db, 'users', auth.currentUser.uid)
      await updateDoc(userRef, {
        name
      })
    }
  } catch (error) {
    toast.error('could not update profile details')
  }
}

const onchange=(e) =>{
setFormData((prev)=>({
  ...prev,
  [e.target.id]: e.target.value
}))
}

  return (
   <div className='profile'>
<header className='profileHeader'>
  <p className='pageHeader'>My Profile</p>

  <button type='button' className='logOut'
  onClick={onlogOut}>Logout</button>

</header>
<main>
  <div className="profileDetailsHeader">
    <p className="profielDetailsText">Personal Details</p>
    <p className="changePersonalDetails"
    onClick={()=>{
      changeDetails && onSubmit()
      setChangeDetails((prev)=> !prev)
    }}>{changeDetails ? 'done' 
    : 'change'} </p>
  </div>


  <div className="profileCard">
    <form>
    <input type="text" id="name" 
    className={!changeDetails ? 'profileName' : 'profileNameActive'}
    disabled={!changeDetails}  value={name} onChange={onchange} />

<input type="email" id="email" 
    className={!changeDetails ? 'profileEmail' : 'profileEmailActive'}
    disabled={!changeDetails}  value={email} onChange={onchange} />

    </form>
  </div>

  <Link to='/create-listing' className='createListing'>
  <svg xmlns="http://www.w3.org/2000/svg" height="24px"
   viewBox="0 0 24 24" width="24px"
   fill="#000000"><path d="M0 0h24v24H0z" fill="none"/>
   <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
   <p>Sell or Rent your home</p>
   <svg xmlns="http://www.w3.org/2000/svg" height="24px"
 viewBox="0 0 24 24" width="24px" fill="#000000">
 <path d="M0 0h24v24H0V0z" fill="none"/><path d="M8.59
 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
  </Link>
</main>
  </div>
  )
}

export default Profile