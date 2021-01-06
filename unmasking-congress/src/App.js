import React, {useState} from 'react'
import './App.css';
import Timeline from './Timeline.js'
import CongressGraph from './CongressGraph.js'

import Countup from 'react-countup'
// import axios from 'axios';



const App = () => {
  const [monthData, setMonthData] = useState([]);
  return (

    <div className='bigContainer'>

      <div className='timelineContainer'>
        <Timeline setMonthData={setMonthData} />
      </div>

      <div className='labelContainer' display='inline' width='50%'>
        <div className='hospitalizedCount' style={{textAlign: 'center', justifyContent: 'center'}}>
          <h2>{'Hospitalized'}</h2>
          <Countup
            start={0}
            end={100}
          />
        </div>

      </div>

      <div className='graphContainer' style={{
        height: '600px',
      }}>
        {monthData ? <CongressGraph monthData={monthData} /> : ''}
      </div>

    </div>

  )
}

export default App;
