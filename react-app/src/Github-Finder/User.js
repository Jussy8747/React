import React, { useEffect } from 'react'

const User = ({getUser, match, user}) => {
useEffect(()=>{
getUser(match.params.login)
}, [])

  
    const  {name, avater_url, 
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repo,
      public_gists,
      hirable
    } = user

    
    return (
      <div>
        {name}iuiui
      </div>
    )
  }


export default User
