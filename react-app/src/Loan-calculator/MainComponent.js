import React, { Component } from 'react'
import Form from './Form'
export default class MainComponent extends Component {
  render() {
    return (
      <div className='container vh-100'>
        <div className="row">
        <div className='col-md-6 mx-auto'>
          <div className='card card-body text-center mt-5'>
            <h1 className='heading display-5 pb-3'>Loan Calculator</h1>
            <Form/>
          </div>

        </div>
        </div>
        
      </div>
    )
  }
}
