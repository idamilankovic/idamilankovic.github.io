import React, { useState } from 'react';
import Axios from "axios";
import { Button } from '@mui/material';

function CallWeather(props) {
    const [temp, setTemp] = useState('')

    const getCurrentTemp = () => {
        const cityValue = props.city;
        const apiKey = "40439c412414da357ad3df5b0e0cb2f0"
        Axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + cityValue + "&appid=" + apiKey).then((response) =>
        response.data).then((json) => {
            setTemp((json.main.temp - 273.15).toFixed(2))
        })
    }
  return (
    <div>
        <Button onClick={() => getCurrentTemp(props.city)}>Show temp</Button>
        {temp}
    </div>
  )
}

export default CallWeather;