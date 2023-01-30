import {createContext, useState, useEffect} from 'react'



const repoContext = createContext()

export const ReposProvider = ({children})=>{
const [repos, setRepos]=useState([])


const getRepos = async (login) =>{
   
    const res = await fetch(`
    ${process.env.REACT_APP_GITHUB_URL}/users/${login}/repos`, {
      headers:{
        Authorization: `${process.env.REACT_APP_GITHUB_CLIENT_TOKEN}`
      }
    })
    const data = await res.json()
   setRepos(oldata => [...oldata, data])

   console.log(data)
  }

return <repoContext.Provider value={{
  repos,
  getRepos

}}>
{children}
</repoContext.Provider>
}

export default repoContext