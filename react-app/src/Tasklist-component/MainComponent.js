import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove } from '@fortawesome/free-solid-svg-icons';

export class MainComponent extends Component {
state ={
  input: '',
  tasks: [],
  show: false
}


  render() {
    const {input, tasks}=this.state
this.handleChange = (e) =>{
  this.setState({
    input: e.target.value
  })
}

this.handleSubmit= (e)=>{
  e.preventDefault()
  if(input !== ''){
  this.setState({
    input: '',
    tasks: [...tasks, 
    {id: input, name: input, completed: false}]
  })
}else{
  this.setState({show: true})
 setTimeout(()=>{
this.setState({
   show: false
 })
 }, 2000)
}
}

// this.handleClick=()=>{
//  const newList = this.state.tasks.filter(item=>item !== id)
// this.setState({
//   tasks: newList
// })
// }


    return (
     <div className='container'>
      { this.state.show && <h1>Enter something</h1>}
       <div className='row'>
         <div className='col s12'>
           <div className='card'>
             <div className='card-content'>
              <span className='card-title'>Tasklist</span>
              <div className='row'>


                <form onSubmit={this.handleSubmit}>
                  <div className='input-field col s12'>
                    <input type='text' value={this.state.input}
                     onChange={this.handleChange} name='task'></input>
                    <label for='task'>New Task</label>          
                  </div>
                   <input type='submit' className='btn' value='Add Task'></input>
                </form>


              </div>
             </div>
             <div className='card-action'>
                <h5>Tasks</h5>
               <div className='input-field col s12'>
                    <input type='text' name='filter'></input>
                    <label for='filter'>New Task</label>          
                  </div>
                  <ul className='collection'>
                   {this.state.tasks.map(move=>(
                     <li className='collection-item'>{move.name}
                       <a 
                        className='secondary-content'>
                         <FontAwesomeIcon onClick={this.handleClick=()=>{
              const newList = this.state.tasks.filter(item=>item.id !== move.id)
          this.setState({
                     tasks: newList
                       })}
                      } icon={faRemove} />
                         </a></li>
                   ))}
                  </ul>
                  <a onClick={()=>{
                    this.setState({
                      tasks: []
                    })
                  }} href='#' className='btn black'>clear task</a>
              </div>
           </div>
         </div>
       </div>
     </div>
    )
  }
}

export default MainComponent