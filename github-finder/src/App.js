import './input.css'

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { GithubProvider } from './components/context/GithubContext';
import { AlertProvider } from './components/context/alert/AlertContext';
import Alert from './components/layout/Alert';
import User from './pages/User';
import { UserProvider } from './components/context/user/UserContext';
import { ReposProvider } from './components/repos/RepoContext';
function App() {
  
  return (
    <Router>
    <div className="flex flex-col justify-between h-screen">
      <Navbar/>
      <AlertProvider>
<GithubProvider>
  <UserProvider>
    <ReposProvider>
    <main className='container mx-auto px-3 pb-12'>
      <Alert/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/user/:login' element={<User/>}/>
        <Route exact path='/notFound' element={<NotFound/>}/>
        <Route exact path='/*' element={<NotFound/>}/>
        </Routes>
      
    </main>
    </ReposProvider>
   </UserProvider>
    </GithubProvider>
 </AlertProvider>
    <Footer/>
    </div>
    </Router>
  );
}

export default App;
