import { Autocomplete, TextField, Select, MenuItem, Alert, Box} from '@mui/material';
import React, {useState, useEffect} from 'react';
import cityList from './cityList';
import Axios from 'axios';

function GetCurrentTemp() {

    const celsius = "&#8451;";
    const farenheit = "&#8457;";
     
    const [unit, setUnit] = useState(() => {
      const initialValue = JSON.parse(localStorage.getItem("unit"));
      return initialValue || "";
    }
    )

    const [city, setCity] = useState(() => {
      const initialValue = JSON.parse(localStorage.getItem("city"));
      return initialValue || "";
    }
    )

    const [temp, setTemp] = useState(null);
    const [textError, setTextError] = useState('')


    useEffect(() => {
      if (city === null) {
      }
      else{
        handleCurrentTemp(city, unit);
      }
    }, [city, unit]);

    const handleCurrentTemp = (city, unit) => {
      if (city !== "" && unit !== "") {
      const apiKey = "40439c412414da357ad3df5b0e0cb2f0"
      Axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey)
        .then((response) => response.data)
        .then((json) => {
          unit==="&#8451;" ? setTemp((json.main.temp - 273.15).toFixed(2)) : setTemp(((json.main.temp - 273.15)*1.8).toFixed(2))
        }
        )
        .catch(function(error) {
          if (error.response) {
            setTextError(error.response.status);
            console.log(error.response)
          }
        }
        )
    }
  }

  return (
    <div>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={Object.values(cityList).map((city) => city.value)}
          sx={{ width: 200 }} 
          value={JSON.parse(localStorage.getItem("city"))}
          onChange={(event, value) => {
            setCity(value);
            localStorage.setItem("city", JSON.stringify(value))
          }
        }
          renderInput={(params) => <TextField {...params} label="Odaberi grad" />
          }
        />
        <Box component="span" sx={{ p: 2 }}>
          <span>{city === null ? "" : temp}</span>
        </Box>

        <Select
          defaultValue={''} 
          onChange={(event, value) => { 
            setUnit(event.target.value);
            localStorage.setItem("unit", JSON.stringify(event.target.value));
          }
        }
          value={JSON.parse(localStorage.getItem("unit"))}>
            <MenuItem value={celsius}>&#8451;</MenuItem>
            <MenuItem value={farenheit}>&#8457;</MenuItem>
        </Select>

          <div>
            {(JSON.parse(localStorage.getItem("city")) === null || JSON.parse(localStorage.getItem("unit")) === null) ?
            <Alert severity="info">Za prikaz trenutne temperature potrebno je odabrati grad i mjernu jedinicu.</Alert> : ""}

            {textError === (401 || 403) ? 
            <Alert severity="error">Dopuštenja za prikaz trenutne temperature su izmijenjena ili istekla.</Alert> : ""}

            {textError === (500 || 502 || 503 || 504) ? 
            <Alert severity="error">Server trenutno nije dostupan. Pokušajte kasnije.</Alert> : "" }
          </div>
    </div>
  )
}

export default GetCurrentTemp;
