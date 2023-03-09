import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './Components/PrivateRoute';
import Explore from './pages/Explore'
import Signin from './pages/Signin'
import Offers from './pages/Offers'
import Profile from './pages/Profile'
import Signup from './pages/Signup'
import Category from './pages/Category';
import ForgotPassword from './pages/ForgotPassword'
import Navbar from './Components/Navbar'
import CreateListing from './pages/CreateListing';
import Listing from './pages/Listing';
import Contact from './pages/Contact';
function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Explore/>}/>
        <Route path='/offers' element={<Offers/>}/>
        <Route path='/category/:categoryName' element={<Category/>}/>
        <Route path='/profile' element={<PrivateRoute/>}>
        <Route path='/profile' element={<Profile/>}/>
        </Route>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/forgetPassword' element={<ForgotPassword/>}/>      
        <Route path='/create-listing' element={<CreateListing/>}/>      
        <Route path='/category/:categoryName/:listingId' element={<Listing/>}/>
        <Route path='/contact/:landlordId' element={<Contact/>}/>
      </Routes>
      <Navbar/>
    </Router>


    <ToastContainer/>
    </>
  )
}

export default App
