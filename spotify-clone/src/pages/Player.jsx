
import Sidebar from './Sidebar'
import Body from './Body'
import Footer from './Footer.jsx'
const Player = () => {
  return (
    <div>
    <div className='flex'>
     <Sidebar/>
     <Body/> 
    </div>
    <Footer/>
  </div>
  )
}

export default Player