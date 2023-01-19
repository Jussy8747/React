import React, {useState, createContext } from "react";
import axios from "axios";

const GithubContext = createContext()


export const GithubProvider = ({children})=>{
 const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null)
  const [text, setText]=useState('')


  // functions
const setalert=(msg, type)=>{
setAlert({msg, type})
setTimeout(()=>{
  setAlert(null)
}, 3000)
}

const clearUsers=()=>{
 setUsers([])
 setLoading(false)
}

const getUser = async (username) =>{
   setLoading(true)
 const res = await axios.get(`
 https://api.github.com/users/${username}?client_id=${
  process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${
    process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
 setUser(res.data)
 setLoading(false)

}

const SearchUsers = async text=>{
  setLoading(true)
 const res = await axios.get(`
 https://api.github.com/search/users?q=${text}&client_id=${
  process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${
    process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
 setUsers(res.data.items )
 setLoading(false)
 console.log(res.data.items)
}
  
   const onSubmit = (e)=>{
e.preventDefault()
if(text === ''){
setalert('Please enter something', 'light')
}else{
SearchUsers(text)
setText('')
}

}

const onChange=(e)=>{setText(e.target.value)}
const showClear=users.length > 0 ? true: false


  return <GithubContext.Provider value={{
text,
setText,
onSubmit,
onChange,
clearUsers,
getUser,
setalert,
showClear,
user,
users,
alert,
loading
  }}>
{children}
  </GithubContext.Provider>
}




export default GithubContext