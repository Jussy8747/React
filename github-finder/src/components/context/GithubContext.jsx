import {createContext, useReducer, useEffect} from 'react'
import reducer, {iniatialState} from './GithubReducer'


const GithubContext = createContext()

export const  GithubProvider = ({children}) =>{
  const [state, dispatch] = useReducer(reducer, iniatialState)

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
    console.log(items)
  }

  const setloading = ()=>{
    dispatch({type: 'LOADING'})
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
      alert('please enter something')
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
  users: state.users,
  loading: state.loading,
  text: state.text,
  Clear,
  setloading,
  Change,
  handleSubmit,
  SearchUsers,
  showClear: state.showClear
  
}}>
{children}
</GithubContext.Provider>
}

export default GithubContext