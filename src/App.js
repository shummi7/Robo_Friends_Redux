import React, { Component } from 'react';
import './App.css';
import Searchbox from './container/Searchbox';
import CardBox from './container/Cardbox';
import Scroll from './container/Scroll';
// import {robots} from './Robot';

class App extends Component {
  constructor(){
    super()
    this.state={
      robots:[],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(user=>{this.setState({robots:user})});
  }

  searchChangeFunc=(event)=>{
        this.setState({searchField:event.target.value});
     }

  render() {

    const filteredRobots=this.state.robots.filter(robot=>{
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })

    return !this.state.robots.length ?
      <h1>Loading</h1> :
      (
      <div className = 'tc'>
      <h1>ROBOFRIENDS</h1>
      <Searchbox searchChange = {this.searchChangeFunc}/>
      <Scroll>
      <CardBox   robots       = {filteredRobots}/>
      </Scroll>
      </div>
    );
  }
}

export default App;
