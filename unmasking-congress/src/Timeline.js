import React, {useState} from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import {sendMonthToBackend} from './API.js'


const OurTimeline = ({setMonthData}) => {

  const [monthSelected, setMonthSelected] = useState('');

  var months = ["December", "November", "October", "September", "August", "July", "June", "May", "April", "March"]
  const useStyles = {
    timeline: {
      transform: "rotate(90deg)"
    },
    timelineContentContainer: {
      textAlign: "left"
    },
    timelineContent: {
      display: "inline-block",
      transform: "rotate(-90deg)",
      textAlign: "center",
      minWidth: 50
    },
    timelineContentSelected: {
      color: "white",
      backgroundColor: "black",
      display: "inline-block",
      transform: "rotate(-90deg)",
      textAlign: "center",
      minWidth: 50
    },
    timelineIcon: {
      transform: "rotate(-90deg)"
    }
  };
  const sendMonth = (month, setMonthData) => {
    console.log(month);
    setMonthSelected(month)
    sendMonthToBackend(month, setMonthData)

  }

  function getMonth(month) {
    return month === monthSelected ? useStyles.timelineContentSelected : useStyles.timelineContent;
  }

  return (
    <Timeline style={useStyles.timeline}>
      {months.map(month => {
        return (
          <div key={month}>
            <TimelineItem >
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent style={useStyles.timelineContentContainer}>
                <div className="timelineContent" onClick={() => {sendMonth(month, setMonthData)}} style={getMonth(month)}>{month}</div>
              </TimelineContent>
            </TimelineItem>
          </div>
        )
      })}
    </Timeline>
  );
}
export default OurTimeline
