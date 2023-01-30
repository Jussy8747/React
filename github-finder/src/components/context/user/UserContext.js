import { createContext, useReducer, useContext } from "react";
import GithubContext from "../GithubContext";
import reducer from "./UserReducer";
const UserContext = createContext()

export const UserProvider = ({children})=>{

  const initailState = {user: [], repos: []}
const [state, dispatch] = useReducer(reducer, initailState)
const {loading}=useContext(GithubContext)

const getUser = async (login) =>{
  setloading()
    const res = await fetch(`
    ${process.env.REACT_APP_GITHUB_URL}/users/${login}`, {
      headers:{
        Authorization: `${process.env.REACT_APP_GITHUB_CLIENT_TOKEN}`
      }
    })

    if(res.status === 404){
      window.location = '/notfound'
    }else{
    const data = await res.json()
    dispatch({type: 'SET_USER', payload: data})
  }
   }


   

   const setloading = ()=>{
    dispatch({type: 'LOADING'})
  }


return <UserContext.Provider value={{
  user: state.user,
  loading,
  getUser,
  repos: state.repos
}}>
  {children}
</UserContext.Provider>
}

export default UserContext