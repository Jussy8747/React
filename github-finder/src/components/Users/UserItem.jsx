import React from 'react'
import {Link } from 'react-router-dom'
const UserItem = ({user: {login, avatar_url}}) => {
  return (
    <div className=' card shadow-md compact side
    ba-base-100'>
     <div className="flex-row item-center card-body space-x-4">
      <div>
        <div className="avater">
          <div className="rounded-full shadow w-14 h-14">
          <img src={avatar_url} alt="profile" />
        </div>
        </div>
      </div>

      <div>
        <h2 className="card-title">
          {login}
        </h2>
        <Link className='text-base-center text-opacity-40' 
        to={`/users/${login}`} />
      </div>
     </div>
    </div>
  )
}

export default UserItem
