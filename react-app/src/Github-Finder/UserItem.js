import { Link } from 'react-router-dom'
import { useContext } from 'react'
import GithubContext from '../context/GithubContext'
const UserItem =(user)=> {



    
    const {login, avatar_url} = user.user
        return (
      <div className='s
      border border-dark 
      m-1 text-center'>
       <img src={avatar_url} alt="" className='my-3 rounded-circle 
       img-fluid ' style={{width: '100px'}}/> 
       <h3 className='text-dark'>{login}</h3>
       <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-2">more</Link>
      </div>
    )
  }


export default UserItem
