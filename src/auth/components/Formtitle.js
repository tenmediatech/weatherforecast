import React from 'react'

const Formtitle = props => (
  <pre style={{fontSize:'16px'}}>
  	 {
  	 	props.city && props.country && <pre style={{color:'#000', fontSize:'18px'}}>
        Temperature °C   Humidity    Condition
  	 	</pre>
  	 }
  </pre>
)

export default Formtitle
