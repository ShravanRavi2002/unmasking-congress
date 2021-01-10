import React, {useState} from 'react';
import {sendMonthToBackend} from './API.js'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const OurTimeline = ({setMonthData, setCases, setDeaths, setHospitalized}) => {

  const [monthSelected, setMonthSelected] = useState('');

  var months = ["March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  
  const sendMonth = (month) => {
    setMonthSelected(month)
    sendMonthToBackend(month, setMonthData, setCases, setDeaths, setHospitalized)

  }

  function getMonth(month) {
    return month === monthSelected ? useStyles.timelineContentSelected : useStyles.timelineContent;
  }

  return (

  <Stepper 
    activeStep={months.indexOf(monthSelected)} 
    nonLinear={true}
    style={{
        backgroundColor:'#F6BF00',
        padding:'0px',
        height:'100%'
      }}>
        {months.map((month, index) => {
          return (
            <Step key={month}>
              <StepLabel icon={index+3} onClick={() => {sendMonth(month)}}>{month}</StepLabel>
            </Step>
          );
        })}
  </Stepper>
  );
}
export default OurTimeline
