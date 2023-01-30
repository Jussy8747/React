import React from 'react'

const RepoList = (repos) => {
  return (
    <div className='rounded-lg shadow-lg card bg-base-100'>
     <div className="card body">
      <h2 className="text-3xl my-4 font-bold card-title">
        Top Respositories
      </h2>
      {repos.map(repo=>(
        <h3>{repo.login}</h3>
      ))}
      
     </div>
    </div>
  )
}



export default RepoList
