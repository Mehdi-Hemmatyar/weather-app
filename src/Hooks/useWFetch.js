import { useEffect, useState } from 'react'
import clearDay from '../Assets/day_clear.png'
import clearNight from '../Assets/night_full_moon_clear.png'
import partCloudDay from '../Assets/day_partial_cloud.png'
import cloudy from '../Assets/cloudy.png'
import partCloudNight from '../Assets/night_full_moon_partial_cloud.png'
import angryClouds from '../Assets/angry_clouds.png'
import rainDay from '../Assets/day_rain.png'
import rainNight from '../Assets/night_half_moon_rain.png'
import thunderDay from '../Assets/day_rain_thunder.png'
import thunderNight from '../Assets/night_half_moon_rain_thunder.png'
import snowDay from '../Assets/day_snow.png'
import snowNight from '../Assets/night_half_moon_snow.png'
import mistWeather from '../Assets/mist.png'






export const useWFetch = () => {

    const [weatherIcon, setWeatherIcon] = useState(clearDay)


    const [data, setData] = useState({ name: "", wind: "", icon: "", temp: "", humidity: "" })



    const FetchCity = async (city) => {

        
        const api_key = "ac2154ae96fe0f9ab055194bd9be75a3"
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`

        const response = await fetch(url)
        const dataW = await response.json()

        if (response.status === 200) {
            setData({
                name: dataW.name,
                wind: dataW.wind.speed,
                icon: dataW.weather[0].icon,
                temp: dataW.main.temp,
                humidity: dataW.main.humidity
            })
            switch (dataW.weather[0].icon) {
                case "01d":
                    setWeatherIcon(clearDay)
                    break;
                case "01n":
                    setWeatherIcon(clearNight)
                    break;
                case "02d":
                    setWeatherIcon(partCloudDay)
                    break;
                case "02n":
                    setWeatherIcon(partCloudNight)
                    break;
                case "03d" :
                    setWeatherIcon(cloudy)
                    break;
                case "03n":
                    setWeatherIcon(cloudy)
                    break;
                case "04d" :
                    setWeatherIcon(angryClouds)
                    break;
                case  "04n":
                    setWeatherIcon(angryClouds)
                    break;
                case "09d" :
                    setWeatherIcon(rainDay)
                    break;
                case "09n" :
                    setWeatherIcon(rainDay)
                    break;
                case "10d" :
                    setWeatherIcon(rainNight)
                    break;
                case "10n":
                    setWeatherIcon(rainNight)
                    break;
                case "11d":
                    setWeatherIcon(thunderDay)
                    break;
                case "11n":
                    setWeatherIcon(thunderNight)
                    break;
                case "13d":
                    setWeatherIcon(snowDay)
                    break;
                case "13n":
                    setWeatherIcon(snowNight)
                    break;
                case "50d":
                    setWeatherIcon(mistWeather)
                    break;
                case "50n":
                    setWeatherIcon(mistWeather)
                    break;
    
                default:
                    break;
            }
        } else {
            setData({
                name: "لطفا در وارد کردن اطلاعات دقت کنید",
                wind: "",
                icon: "error",
                temp: "",
                humidity: ""
            })
        }


       


    }


    return { data, weatherIcon, FetchCity }

}
