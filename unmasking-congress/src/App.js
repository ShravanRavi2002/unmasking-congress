import React, {useState} from 'react'
import {Component} from 'react'
import './App.css';
import Timeline from './Timeline.js'
import axios from 'axios';
class App extends Component {
  state = {
    data: null,
  }
  // async componentDidMount() {
  //     await axios.get('http://localhost:8000')
  //     .then(response => {
  //       this.setState({
  //           data: JSON.parse(response.data),
  //         });
  //       console.log(this.state.data)
  //     })
  //     .catch(err =>{console.error(err)});
  // }
  render(){
    // var outArr = [];
    // if (this.state.data == null)
    //   return <div>Loading...</div>

    // for (var key in this.state.data) {
    //   outArr.push(key + ": " + this.state.data[key].sentiment)
    // }

    return(
      // outArr.map(key => (
      //     <div>{key}</div>
      //  ))
      <div style={{
        margin:'50px',
        height: '200px'
      }}>
        <Timeline />
      </div>
    )
  }
}

export default App;
