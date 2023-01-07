import React, { Component } from 'react'
import Result from './Result'
import Loader from './Loader'

export default class Form extends Component {
// state methods
state={
  value: '',
  value1: '',
  value2: '',
  showResult: false,
  showLoader: false,
  error: '',
  showError: false,
  year:  0,
  monthly: 0,
  interest: 0,
  amount: 0
}
  
  render() {

    this.handleChange = (e) =>{
      const {name, value} = e.target
      this.setState({
          [name]: value
      })
    }

    this.handleSubmit = (e)=>{
     e.preventDefault()
     const amount = parseFloat(this.state.value)
     const interest = parseFloat(this.state.value1) / 100/12
     const year = parseFloat(this.state.value2) *12

     const x = Math.pow(1+interest, year)
     const monthly = (amount * x * interest)/(x-1)
     this.setState({
       amount: amount,
       interest: interest,
       monthly: monthly,
       year: year,
       value: '',
       value1: '',
       value2: ''
     })
      if(isFinite(monthly)){
        this.setState({showLoader: true})
        setTimeout(()=>{
 this.setState({showLoader: false})
 this.setState({showResult: true})
        },1000)
       
        }else{
          this.setState({showError: true})
          setTimeout(()=>{
            
          this.setState({
          error: 'please check your numbers',
          showError: false
        })
        }, 2000)
      }

    }
   
    return (
      <div>
        <h1 className='text-danger'>{this.state.showError && this.state.error}</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <div className='input-group'>
              <span className="input-group-text" id="basic-addon1">$</span>
              <input type='number' className='form-control' onChange={this.handleChange} 
              value={this.state.value} name='value' placeholder='loan amount'></input>
            </div>
          </div>


          <div className='form-group py-3'>
            <div className='input-group'>
              <span className="input-group-text" id="basic-addon1">%</span>
              <input  onChange={this.handleChange} name='value1' value={this.state.value1}
               type='number' className='form-control' placeholder='Interest'></input>
            </div>
          </div>

          <div className='form-group'>
             <input type='number' className='form-control'
             onChange={this.handleChange} name='value2' value={this.state.value2}
             placeholder='Years to repay'></input>
          </div>

          <div className='form-group'>
            <input className='btn btn-dark btn-block my-3' type='submit' value='calculate'></input>
          </div>
        </form>
        { this.state.showLoader && <Loader/>}
            { this.state.showResult && <Result
            amount={this.state.amount}
            year={this.state.year}
            interest={this.state.interest}
            monthly={this.state.monthly}/>}

      </div>
    )
  }
}
