import React from 'react'
import notFound from '../Assets/404.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureQuarter , faWind ,faDroplet } from '@fortawesome/free-solid-svg-icons'





export const WeatherBasic = ({data , weatherIcon}) => {



  return (<div className="container">

<div className="d-flex flex-row ">
  <div className="p-2"><img src={data.icon === "error" ? notFound : weatherIcon} alt='' /></div>
</div>

<div className="d-flex flex-row ">
<h1 className="p-2 " >{data.name !== "" && data.name}</h1>
</div>
<div className="d-flex flex-row ">

<h1 className="p-2 " > {data.temp !== "" &&  data.temp + "°C" } <FontAwesomeIcon icon={faTemperatureQuarter} bounce style={{color: "#d01b96",}} /> </h1>
</div>
<div className="d-flex justify-content-around mb-3 ">
  <div className="p-2 ">{data.wind !== "" &&  + data.wind + " Km/h"} <FontAwesomeIcon icon={faWind} fade style={{color: "#7b2d66",}} /></div>
  <div className="p-2">{data.humidity !== "" &&  + data.humidity} <FontAwesomeIcon icon={faDroplet} fade style={{color: "#d0499e",}} /></div>

</div>





      
      
      
    

      
      
</div>
    
  )
}
