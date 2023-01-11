
import Navbar from "./Github-Finder/Navbar";
import Users from "./Github-Finder/Users";
import React, {Component} from 'react' 
import axios from 'axios'
import Search from "./Github-Finder/Search";
 class App extends Component {
 state={
  users: [],
  loading: false
 }

  async  componentDidMount(){
    console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET)
    this.setState({loading: true})
 const res = await axios.get(`
 https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
 this.setState({users: res.data, loading: false})
}


  render(){
  return (
    <div >
    <Navbar name={'Github Finder'} font={<i className="fab fa-github px-2"/>}/>
     <div className='container'>
     <Search/>
    <Users users={this.state.users} loading={this.state.loading}/>
    </div>
    </div>
  );
}
}
export default App;
