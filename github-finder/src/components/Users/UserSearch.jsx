import React from 'react'
import { useContext, } from 'react'
import GithubContext from '../context/GithubContext'


const UserSearch = () => {

  const {Clear, showClear, handleSubmit, Change, text} = useContext(GithubContext)
 
  return  (
    <div className='grid grid-cols-1 xl:gird-cols-2 lg:grid-cols-2
    md:grid-cols-2 gap-8 mb-8'>
      <div>
        <form onSubmit={handleSubmit}>
        <div className="form-control">
          <div className="relative">
            <input type="text" name="" id=""
             className="w-full pr-40 bg-gray-200 
             input input-lg text-black"
             value={text} onChange={Change} />
             <button className="absolute top-0 right-0 
             rounded-l-none w-36 btn btn-lg" type='submit'>GO</button>
          </div>
        </div>
        </form>
      </div>
      
         {showClear && ( <div>
           <button onClick={Clear} className="btn btn-ghost btn-lg">Clear</button>
         </div>
         )}
      
    </div>
  )
}

export default UserSearch
