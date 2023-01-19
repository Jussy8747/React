import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom'
export class Navbar extends Component {
  render() {
    const {font, name}=this.props
    return (
      <div>
        <nav className='navbar navbar-expand-lg
         navbar-expand-md  navbar-expand-sm
         navbar-light boxed bg-danger text-light '>
          <div className="pl-5 container">
          <h3 className='ml-5'>
            {font}
            {name}
            </h3>
             <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
            <div id="navbarNav" className='collapse navbar-collapse'>
            <ul className="navbar-nav mx-auto ">
              <li  className="nav-item">
                <Link className=" text-white nav-link" to="/">Home</Link>
                 </li>
              <li className="nav-item">
                <Link className=" text-white nav-link" to="/about">About</Link> 
                </li>
            </ul>
            </div>
            </div>
        </nav>
        
      </div>
    )
  }
}

export default Navbar
