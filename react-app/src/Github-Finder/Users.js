import Spinner from './Spinner'
import UserItem from './UserItem'

const Users = ({users, loading}) =>{

    
    
      if(!loading){
        return (
      <div className='container'>
        <div  style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridGap: '1rem'
        }}>
          
        {users.map(move=>(
          <UserItem key={move.id} user={move}/>
        ))}
        </div>
        </div>
        )}else{
         return <Spinner/>
        }
    
  }


export default Users
