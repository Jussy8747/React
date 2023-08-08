import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SpotifyContext, {SportyProvider} from './context/SpotifyContext' 
import SignUp from './pages/SignUp'
import Playing from './pages/Player'

function App() {
 

  return (
    <SportyProvider>
    <Router>
    <div className="">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/playing' element={<Playing/>}/>
      </Routes>
     </div>
    </Router>
    </SportyProvider>
  )
}

export default App
