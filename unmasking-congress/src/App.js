import React, { useState } from 'react'
import './App.css';
import Timeline from './Timeline.js'
import axios from 'axios';
const App = () => {
    const [monthData, setMonthData] = useState({});
  
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
        <Timeline setMonthData={setMonthData}/>
        {console.log(monthData)}
      </div>
    )
}

export default App;
