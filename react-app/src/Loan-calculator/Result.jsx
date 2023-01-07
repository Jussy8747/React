import React, { Component } from 'react'

export class Result extends Component {
 
  render() {
    const {monthly}=this.props
    return (
      <div className=''>
        <h3>Result</h3>
          <div className='form-group'>
            <div className='input-group'>
              <span className="input-group-text" id="basic-addon1">Monthly Payment</span>
              <input type='number' className='form-control'
              value={(monthly).toFixed(2)}
              
              disabled></input>
            </div>
          </div>

          
          <div className='form-group my-3'>
            <div className='input-group'>
              <span className="input-group-text" id="basic-addon1">Total Payment</span>
              <input type='number' className='form-control'
               value={(this.props.monthly * this.props.year).toFixed(2)}
              disabled></input>
            </div>
          </div>


          <div className='form-group'>
            <div className='input-group'>
              <span className="input-group-text" id="basic-addon1">Total Interest</span>
              <input type='number' className='form-control'
              value={((this.props.monthly * this.props.year)-this.props.amount).toFixed(2)}
              disabled></input>
            </div>
          </div>
          </div>
    )
  }
}

export default Result
