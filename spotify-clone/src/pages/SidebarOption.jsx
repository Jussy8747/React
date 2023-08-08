

const SidebarOption = ({option, Icon}) => {
  return (
    <div className='
    text-gray-400
    h-10 cursor-pointer  
    hover:text-white transition-colors duration-200 ease-in
    '>
      
      {Icon ? <h4>{option}</h4> : <p>{option}</p>}
    </div>
  )
}

export default SidebarOption