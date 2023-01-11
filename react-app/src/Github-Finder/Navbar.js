import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    const {font, name}=this.props
    return (
      <div>
        <nav className='navbar navbar-expand-lg
         navbar-light bg-danger text-light display-5'>
          <h3>
            {font}
            {name}
            </h3>
        </nav>
      </div>
    )
  }
}

export default Navbar
