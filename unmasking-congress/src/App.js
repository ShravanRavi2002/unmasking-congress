import React, {useState} from 'react'
import './App.css';
import axios from 'axios';
function App() {
  state = {
    data: {},
  }
  componentDidMount(){
      axios.get('http://localhost:8000')
      .then(response => {
        this.setState({
            details: response.data
          });
      })
      .catch(err =>{console.error(err)})
  }
  return(
    <h1>Hello World</h1>
  );
}

export default App;
