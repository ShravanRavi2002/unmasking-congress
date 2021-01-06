import React from 'react'
import { ResponsiveScatterPlot } from '@nivo/scatterplot'

const CongressGraph = ({monthData}) => {

  return(
    <ResponsiveScatterPlot
      data={monthData}
      margin={{ top: 60, right: 140, bottom: 70, left: 90 }}
      xScale={{ type: 'linear', min: '-1', max: '1' }}
      yScale={{ type: 'linear', min: '0', max: '1' }}
      colors={ (datum) => (datum.color)}
      blendMode="multiply"
      nodeSize={15}
      axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'sentiment',
          legendPosition: 'middle',
          legendOffset: 46
      }}
      axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'polarity',
          legendPosition: 'middle',
          legendOffset: -60
      }}
      tooltip={({ node }) => (
        <div className='tooltip'
            style={{
                background: '#ffffff',
                padding: '12px 16px',
            }}
        >
            <strong style={{color:node.data.color}}>
                {node.data.label} ({node.data.serieId})
            </strong>
            <br />
            {`sentiment: ${node.data.formattedX.toFixed(2)}`}
            <br />
            {`polarity: ${node.data.formattedY.toFixed(2)}`}
        </div>
      )}
      // todo: implement legend
    />
  )
}

export default CongressGraph