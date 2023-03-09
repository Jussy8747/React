import React from 'react'
import { Form, useLocation, useNavigate } from 'react-router-dom'
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import {doc, setDoc, getDoc} from 'firebase/firestore'
import { db } from '../Firebase.config'
import {toast} from 'react-toastify'
import googleIcon from '../assets/svg/googleIcon.svg'
import { async } from '@firebase/util'
const Oauth = () => {
    const nav = useNavigate()
    const location = useLocation()
    const data = {
        timestamp: new Date()
      };
    const onclick = async () =>{
        try {
            const auth = getAuth()
            const provider = new GoogleAuthProvider()
            const result = await signInWithPopup(auth, provider)
            const user = result.user

            const docRef =  doc(db, 'users', user.uid)
            const docSnap = await getDoc(docRef)

            if(!docSnap.exists()){
                await setDoc(doc(db, 'users', user.uid), {
                    name: user.displayName,
                    email: user.email,
                    timestamp: data
                })
            }
            nav('/')
        } catch (error) {
           toast.error('Could not authorize with') 
        }
    }

  return (
    <div className='socialLogin' >
        <p>Sign {location.pathname === '/signup' ? 'up' : 'in'} with</p>
        <button className='socialIconDiv' onClick={onclick} >
            <img className='socialIconImg' src={googleIcon} alt="gogle" />

        </button>
    </div>
  )
}

export default Oauth