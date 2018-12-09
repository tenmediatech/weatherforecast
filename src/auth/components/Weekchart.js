import React, {Component} from 'react'
import {Bar, Line, Pie} from 'react-chartjs-2'

class Weekchart extends Component {
  render() {
    const { cityData } = this.props
    const { temp, humidity, description, icon } = cityData

    const weektempData = {
      labels: [temp],
      datasets: [
        {
          label: 'Temperature',
          data: [temp],
          backgroundColor: ['rgba(255, 99, 132, 0.6)',]
        }
      ]
    }
    console.log(temp)

    // const humidityData = {
    //   labels: [city],
    //   datasets: [
    //     {
    //       label: 'Humidity',
    //       data: [humidity ],
    //       backgroundColor: [ 'rgba(75, 192, 192, 0.6)']
    //     }
    //   ]
    // }
    return(
      <div className="chart">
        <Bar
          data={weektempData}
          options={{
            title: {
              display: true,
              text: 'Large'
            }
          }}
        />
        {/*<Bar
          data={humidityData}
          options={{
            title: {
              display: true,
              text: 'Large'
            }
          }}
        />*/}
      </div>
    )
  }
}

export default Weekchart
