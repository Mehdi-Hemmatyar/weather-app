import React, {  useEffect, useState } from 'react'
import { useWFetch } from '../Hooks/useWFetch'
import { WeatherBasic } from './WeatherBasic'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export const WeatherWrapper = () => {

    const [value, setValue] = useState("")

    const { data ,weatherIcon , FetchCity } = useWFetch()



    const successLoc = async (position)=>{
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const api_key = "ac2154ae96fe0f9ab055194bd9be75a3"
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}`
        const response = await fetch(url)
        const data = await response.json()
        if (response.status === 200) {
            FetchCity(data.name)
            
        } else{
            console.log("failed")
        }
        
    }
          
    
    const errorLoc =()=>{
        console.log("cant find Location")
    }
    
    useEffect(()=>{
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(successLoc, errorLoc);
          } else {
            console.log("Geolocation not supported");
          }
    },[])




    const handleSubmit = (e) => {
        e.preventDefault();
        if (value !== "") {
            FetchCity(value)
            console.log(data)
            setValue("")
        }
    }
    return (<>
        <form onSubmit={handleSubmit} >
            <input type='text' className='col-sm-8 my-5' value={value} placeholder='Enter a City' onChange={(e) => { setValue(e.target.value) }} />
            <button type='submit' className='btn btn-success col-sm-2 mx-2' ><FontAwesomeIcon icon={faSearch}/></button>
        </form>
        <WeatherBasic data={data} weatherIcon={weatherIcon} />
    </>

    )
}
