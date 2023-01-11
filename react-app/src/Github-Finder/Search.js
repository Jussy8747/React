import React, { Component } from 'react'

export class Search extends Component {
  state={
    text: ''
  }

  onSubmit = (e)=>{
e.preventDefault()

}
  render() {




    return (
      <div className='form-group'>
        <form onSubmit={this.onSubmit}>
          <input value={this.state.text} onChange={(e)=>{
            this.setState({[e.target.name]: e.target.value})}} type="text" name="text"
          placeholder='Search users'
          className=" my-3 form-control" />
          <input type="submit" value='Search'
          className='mb-3 form-control btn btn-dark btn-block'/>
        </form>
      </div>
    )
  }
}

export default Search
