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
  const [cases=0, setCases] = useState([]);
  return (
    
    <div className='bigContainer' style={{
      backgroundColor:'#333333',
      justifyContent:'center',
      height:'100vh',
      margin:0
          }}>
      <div className='timelineNavBar' style={{
          width:'100%',
          height:'50px',
          position:'fixed',
          zIndex:'100'
        }}>
          <OurStepper setMonthData={setMonthData} setHospitalized={setHospitalized} setDeaths={setDeaths} setCases={setCases}/>
      </div>

        <div className='contentContainer' style={{
          backgroundColor:'#333333',
          paddingTop: '50px',
        }}>

          <div className='headerContainer' style={{textAlign:"center", color:'#eeeeee'}}>
            <h2 style={{margin:0, padding:'.5%'}}>Unmasking Congress</h2>
            <p>Check out how congressmembers' opinions on masks changed over the course of 2020 as the COVID-19 Pandemic raged on</p>
          </div>

          <div className='labelContainer' style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginLeft:'25%',
            marginRight:'25%'

            
          }}>
            <div style={{color:'yellow'}}>
              <h2>{'Cases'}</h2>
              <Countup 
                  start={0}
                  end={cases}
                  duration={2}
                  preserveValue={true}
                  separator={','}
                />
            </div>
            <div style={{color:'orange'}}>
                
              <h2>{'Hospitalized'}</h2>
              <Countup
                start={0}
                end={hospitalized}
                duration={2.5}
                preserveValue={true}
                separator={','}
              />
            </div>

            <div style={{color:'red'}}>
              <h2>{'Deaths'}</h2>
              <Countup 
                  start={0}
                  end={deaths}
                  duration={3}
                  preserveValue={true}
                  separator={','}
                />
            </div>

          
              
          </div>

          <div className='graphContainer' style={{
            height: '70vh',
            width:'90%',
            marginLeft:'5%'
          }}>
            {monthData ? <CongressGraph monthData={monthData} /> : ''}
          </div>

        </div>

    </div>

  )
}

export default App;
