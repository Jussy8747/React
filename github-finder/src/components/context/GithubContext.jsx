import {createContext, useReducer, useContext} from 'react'
import reducer, {iniatialState} from './GithubReducer'
import AlertContext from './alert/AlertContext'
import axios from 'axios'
import { useState } from 'react'

const GithubContext = createContext()

export const  GithubProvider = ({children}) =>{
  const [state, dispatch] = useReducer(reducer, iniatialState)
 const {setAlert} = useContext(AlertContext)

  const SearchUsers = async (test) =>{
    const params = new URLSearchParams({
      q: test
    })
    setloading()
    const res = await fetch(`
    ${process.env.REACT_APP_GITHUB_URL}/search/users?${params}`, {
      headers:{
        Authorization: `${process.env.REACT_APP_GITHUB_CLIENT_TOKEN}`
      }
    })
    const {items} = await res.json()
    dispatch({type: 'SET_USERS', payload: items})
   
  }



   
  const setloading = ()=>{
    dispatch({type: 'LOADING'})
  }
  const load = ()=>{
    dispatch({type: 'LOAD'})
  }

  const Change = (e)=>{
    dispatch({
      type: 'CHANGE',
      load: e.target.value
    })
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(state.text === ''){
      setAlert('please enter something', 'error')
    }else{
      SearchUsers(state.text)
      dispatch({type: 'SHOWCLEAR'})
    }
    dispatch({
      type: 'SUBMIT',
    })
  }
  const Clear = ()=>{dispatch({type: 'CLEAR'})}

return <GithubContext.Provider value={{
 ...state,
  Clear,
  setloading,
  Change,
  load,
  handleSubmit,
  SearchUsers,
  
  
}}>
{children}
</GithubContext.Provider>
}

export default GithubContext