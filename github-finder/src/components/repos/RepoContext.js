import { useContext, useReducer } from 'react'
import {createContext, useState, useEffect} from 'react'
import GithubContext from '../context/GithubContext'


const repoContext = createContext()

export const ReposProvider = ({children})=>{
const [repos, setRepos]=useState([])
const {load, setloading} = useContext(GithubContext)


const getRepos = async (login) =>{
    
    setloading()
  const res = await fetch(`
    ${process.env.REACT_APP_GITHUB_URL}/users/${login}/repos`, {
      headers:{
        Authorization: `${process.env.REACT_APP_GITHUB_CLIENT_TOKEN}`
      }
    })
    const data = await res.json()
    setRepos(data)
   load()
  }



return <repoContext.Provider value={{
  repos,
  getRepos

}}>
{children}
</repoContext.Provider>
}

export default repoContext