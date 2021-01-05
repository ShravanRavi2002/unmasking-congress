import React, {useState} from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import {sendMonthToBackend} from './API.js'

  
const OurTimeline = ({setMonthData}) => {
    var months=["December", "November", "October", "September", "August", "July", "June", "May" , "April", "March"]
    const useStyles ={
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
        timelineIcon: {
          transform: "rotate(-90deg)"
        }
    };
    const sendMonth = (month, setMonthData) =>{
        console.log(month);
        sendMonthToBackend(month, setMonthData)
        
    }
  return (
    <Timeline style={useStyles.timeline}>
        {months.map(month => {
            return(
                <div key={month}>
                    <TimelineItem >
                        <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent style={useStyles.timelineContentContainer}>
                            <div className="timelineContent" onClick={() => {sendMonth(month, setMonthData)}} style={useStyles.timelineContent}>{month}</div>
                        </TimelineContent>
                    </TimelineItem>
                </div>
            )
        })}
    </Timeline>
  );
}
export default OurTimeline
