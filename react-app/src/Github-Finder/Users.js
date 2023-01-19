import Spinner from './Spinner'
import UserItem from './UserItem'
import { useContext } from 'react'
import GithubContext from '../context/GithubContext'

const Users = () =>{
const {loading, users} = useContext(GithubContext)
      if(!loading){
        return (
     
        <div  style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridGap: '1rem'
        }}>
          
        {users.map(move=>(
           <UserItem key={move.id} user={move}/>
        ))}
        </div>
      
        )}else{
         return <Spinner/>
        }
    
  }


export default Users
