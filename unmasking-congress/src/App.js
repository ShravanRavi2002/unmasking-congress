import React, {useState} from 'react'
import './App.css';
import OurStepper from './Timeline.js'
import CongressGraph from './CongressGraph.js'

import Countup from 'react-countup'
// import axios from 'axios';

const App = () => {
  const [monthData, setMonthData] = useState([]);
  const [hospitalized=0, setHospitalized] = useState([]);
  const [deaths=0, setDeaths] = useState([]);
  const [cases=0, setCases] = useState([])
  return (

    <div className='bigContainer' style={{
      
      justifyContent:'center'
    }}>
      <div className='headerContainer' style={{textAlign:"center"}}>
        <h2 >Unmasking Congress</h2>
        <p>Check out how congressmembers' opinions on masks changed over the course of 2020 as the COVID-19 Pandemic raged on</p>
      </div>
      <div className='timelineContainer' style={{
        height:'200px',
        width:'100%'
      }}>
        <OurStepper setMonthData={setMonthData} setHospitalized={setHospitalized} setDeaths={setDeaths} setCases={setCases}/>
      </div>

      <div className='labelContainer' style={{
        display: 'flex',
        justifyContent: 'center'
      }}>

        <div style={{textAlign: 'center', justifyContent: 'space-between', margin: 150, fontFamily:'Copperplate'}}>
          <h2>{'Hospitalized'}</h2>
          <Countup
            start={0}
            end={hospitalized}
            duration={2}
            preserveValue={true}
            separator={','}
          />
        </div>

        <div style={{textAlign: 'center', justifyContent: 'center', margin: 150, fontFamily:'Copperplate'}} >
          <h2>{'Deaths'}</h2>
          <Countup 
              start={0}
              end={deaths}
              duration={2.5}
              preserveValue={true}
              separator={','}
            />
        </div>

        <div style={{textAlign: 'center', justifyContent: 'center', margin: 150, fontFamily:'Copperplate'}}>
          <h2>{'Cases'}</h2>
          <Countup 
              start={0}
              end={cases}
              duration={3}
              preserveValue={true}
              separator={','}
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
