import React from 'react'

const SidebarOption = ({option, Icon}) => {
  return (
    <div className='
    text-gray-400
    h-10 cursor-pointer  
    hover:text-white transition-colors duration-200 ease-in
    '>
      {Icon ? <h4>{option}</h4> : <h1>{option}</h1>}
    </div>
  )
}

export default SidebarOption