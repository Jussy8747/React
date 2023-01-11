

const UserItem =props=> {

    const {login, avatar_url, html_url} = props.user
        return (
      <div className='
      border border-dark 
      m-1 text-center'>
       <img src={avatar_url} alt="" className='my-3 rounded-circle 
       img-fluid ' style={{width: '100px'}}/> 
       <h3 className='text-dark'>{login}</h3>
       <a href={html_url} className="btn btn-dark btn-sm my-2">more</a>
      </div>
    )
  }


export default UserItem
