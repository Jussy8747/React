import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from "./Github-Finder/Navbar";
import Users from "./Github-Finder/Users";
import React, { Fragment, } from 'react' 

import { GithubProvider }  from './context/GithubContext.js';
import Search from "./Github-Finder/Search";
import Alert from "./Github-Finder/Alert";
import About from './Github-Finder/pages/About';
import User from './Github-Finder/User'

 const App = () => {
// const {SearchUsers}=useContext(GithubContext)



  return (
    <GithubProvider>
    <Router>
    
    <div >
      
    <Navbar name={'Github Finder'} font={<i className="fab fa-github px-2"/>}/>
     <div className='container'>
      <Alert/>
    <Routes>
        <Route path='/' element={(
          <Fragment>
  <Search/>
    <Users/>
         </Fragment>
        )}/>

        <Route path="/about" element={<About/>} />
        <Route path='user/:login' element={<User/>}/>
     </Routes>
   
    </div>
    </div>
    
    </Router>
    </GithubProvider>
 );
}
export default App;
