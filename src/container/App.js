import React, { Component } from 'react';
import './App.css';
import Searchbox from '../components/Searchbox';
import CardBox from '../components/Cardbox';
import Scroll from '../components/Scroll';
// import {robots} from './Robot';

import {connect} from 'react-redux';
import {action_setSearchField} from '../action';

const mapStateToProps=state=>{
  return{
     searchField:state.searchField
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    searchChangeFunc:(event)=>{
      dispatch(action_setSearchField(event.target.value))
    }
  }
}

class App extends Component {
  constructor(){
    super()
    this.state={
      robots:[]
      // searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(user=>{this.setState({robots:user})});
  }

  // searchChangeFunc=(event)=>{
  //       this.setState({searchField:event.target.value});
  //    }

  render() {

    const filteredRobots=this.state.robots.filter(robot=>{
      return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
    })

    return !this.state.robots.length ?
      <h1>Loading</h1> :
      (
      <div className = 'tc'>
      <h1>ROBOFRIENDS</h1>
      <Searchbox searchChange = {this.props.searchChangeFunc}/>
      <Scroll>
      <CardBox   robots       = {filteredRobots}/>
      </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
