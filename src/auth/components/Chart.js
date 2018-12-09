import React, {Component} from 'react'
import {Bar, Line, Pie} from 'react-chartjs-2'

class Chart extends Component {
  render() {
    const { temp } = this.props
    console.log(temp)
    const tempData = {
      labels: temp,
      datasets: [
        {
          label: 'Day Temperature',
          data: temp,
          backgroundColor: 'rgba(255, 255, 0, 0.6)',
          borderColor: 'rgba(000, 000, 000, 1)',
          borderWidth: 1
        }
      ]
    }
    return(
      <div className="chart-container">
        <div className="chart" >
          <Bar
            data={tempData}
            options={{
              responsive: true,
              tooltips: {
                mode: 'label',
              },
              hover: {
                mode: 'nearest',
                intersect: true
              },
              scales: {
                xAxes: [{
                  display: true,
                  gridLines: {
                    display: false
                  },
                  scaleLabel: {
                    display: true,
                    labelString: 'Data each 3 Hour'
                  }
                }],
                yAxes: [{
                  display: true,
                  gridLines: {
                    display: false
                  },
                  scaleLabel: {
                    display: true,
                    labelString: '°C'
                  }
                }]
              }
            }}
          />
        </div>
      </div>
    )
  }
}

export default Chart
