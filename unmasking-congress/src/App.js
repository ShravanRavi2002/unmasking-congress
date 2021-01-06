import React, { useState } from 'react'
import './App.css';
import Timeline from './Timeline.js'
import CongressGraph from './CongressGraph.js'

import CountUp from 'react-countup'
// import axios from 'axios';



const App = () => {
    const [monthData, setMonthData] = useState([]);
    return(

        <div className='bigContainer'>

          <div className = 'timelineContainer'>
            <Timeline setMonthData={setMonthData}/>
          </div>
          <div>
            <div style={{display: 'inline', margin: 50, backgroundColor: 'black', color: 'white'}}>
                <CountUp className="Hospitalized" start={0} end={100}> </ CountUp>
            </div>
          </div>
          

          <div className='graphContainer' style={{
            height:'600px',
          }}>
          {monthData ? <CongressGraph monthData={monthData}/> : ''}
          </div>

        </div> 

    )
}

export default App;
