import React, { useContext} from 'react'
import GithubContext from '../context/GithubContext'

const Search = () => {
 const {text,
onSubmit, onChange, showClear, clearUsers
} = useContext(GithubContext)
 


    return (
      <div className='form-group'>
        <form onSubmit={onSubmit}>
          <input value={text} onChange={onChange} type="text" name="text"
          placeholder='Search users'
          className=" my-3 form-control" />
          <input type="submit" value='Search'
          className='mb-3 form-control btn btn-dark btn-block'/>
        </form>
       { showClear && <button className=" mb-2 btn btn-light form-control"
        onClick={clearUsers}
        >clear</button>}
      </div>
    )
  
}

export default Search
