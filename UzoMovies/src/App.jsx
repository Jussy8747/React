import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import MovieList from './components/MovieList'
import Navbar  from "./components/Navbar"
import { MovieProvider } from './context/MoviesComtext'
import { NavbarProvider } from './context/NvabarContext'
import About from './pages/About'
import Favorite from './pages/Favorite'
function App() {
 
  return (
    <Router>
      <NavbarProvider>
    <div>
     <Navbar/>
     <MovieProvider>
     <Routes>
      <Route path='/about' element={<About/>}/>
      <Route path='/favorite' element={<Favorite/>}/>
     </Routes>
     <MovieList/>
     </MovieProvider>
    </div>
    </NavbarProvider>
    </Router>
  )
}

export default App
