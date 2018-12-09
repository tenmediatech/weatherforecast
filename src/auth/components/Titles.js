import React from 'react'
import Chart from './Chart'

const Titles = props => (

  <div className="weather__infoleft" style={{border:'solid 1px #000', borderRadius:'10px'}}>
  	 {
  	 	props.city && props.country && <p>
        <span className="weather__condition"> { props.description } <img src={ props.icon } style={{width:'70px'}}/></span>
  	 		<span className="weather__valueleft" style={{fontSize: '60px'}}> { props.city }, { props.country }</span>
  	 	</p>
  	 }
  	 {
  	 	props.temperature && <ul>
        <li>Temperature: <span className="weather__valueleftdetail"> { props.temperature }°C</span></li>
        <li>Humidity: <span className="weather__valueleftdetail"> { props.humidity }%</span></li>
  	 	</ul>
  	 }
  	 {
  	 	props.error && <p className="weather__error">{ props.error }</p>
  	 }
  </div>
)

export default Titles
