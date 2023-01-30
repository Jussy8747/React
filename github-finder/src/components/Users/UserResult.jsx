import React from 'react'
import UserItem from './UserItem'
import { useContext,} from 'react'
import GithubContext from '../context/GithubContext'
import Spinner from '../layout/Spinner'
const UserResult = () => {



  const {users, loading,}=useContext(GithubContext)


    if(!loading){
  return (
    <div className='grid grid-cols-1 gap-8 xl:grid-cols-4
    lg:grid-cols-3 md:grid-cols-2'>
     {users.map(item=>(
      <UserItem key={item.id} user={item}/>
     ))}
    </div>
  )
  }else{
    return <Spinner/>
  }
     
}

export default UserResult
