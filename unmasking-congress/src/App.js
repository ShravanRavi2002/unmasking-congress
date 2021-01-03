import React, {useState} from 'react'
import {Component} from 'react'
import './App.css';
import axios from 'axios';
class App extends Component {
  state = {
    data: null,
  }
  componentDidMount() {
      axios.get('http://localhost:8000')
      .then(response => {
        console.log(response.data)
        this.setState({
            data: response.data,
          });
      })
      .catch(err =>{console.error(err)});
  }
  render(){
    var outArr = [];
    if (this.state.data == null)
      return <div>Loading...</div>

    for (var key in this.state.data) {
      outArr.push(key + ": " + this.state.data[key])
    }

    return(
      outArr.map(key => (
          <div>{key}</div>
       ))
    )
  }
}

export default App;
