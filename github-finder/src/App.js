import './input.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { GithubProvider } from './components/context/GithubContext';
function App() {
  return (
    <Router>
    <div className="flex flex-col justify-between h-screen">
      <Navbar/>
<GithubProvider>
    <main className='container mx-auto px-3 pb-12'>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/notFound' element={<NotFound/>}/>
        <Route exact path='/*' element={<NotFound/>}/>
        </Routes>
      
    </main>
    </GithubProvider>

    <Footer/>
    </div>
    </Router>
  );
}

export default App;
