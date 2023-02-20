import { Autocomplete, TextField, Alert, Box, NativeSelect} from '@mui/material';
import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import cityList from './cityList';


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
    const localMemoryListCity = JSON.parse(localStorage.getItem("listCity"))
    const [listCity, setListCity] = useState(
      localMemoryListCity != null ? localMemoryListCity : cityList
    )
    
    useEffect(() => {
      if (city === null) {
      }
      else{
        handleCurrentTemp(city, unit);
      }
    }, [city, unit]);

    const handleCurrentTemp = (city, unit) => {
      if (city !== "") {
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

  const handleIncrementCounter = (selectedItem) => {
    const updateListCity = [...listCity];
    const index = updateListCity.indexOf(selectedItem);
    updateListCity[index].counter +=1;
    updateListCity.sort(function(city1, city2) {
      return city2.counter - city1.counter;
    })
    setListCity([...updateListCity]);
    localStorage.setItem("listCity", JSON.stringify([...updateListCity]))
  }

  return (
    <div>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={
            localMemoryListCity === null ? Object.values(listCity).map((city) => city.value) : 
            Object.values(localMemoryListCity).map((city) => city.value)
            }
          sx={{ width: 200 }} 
          value={JSON.parse(localStorage.getItem("city"))}
          onChange={(event, value) => {
            setCity(value);
            localStorage.setItem("city", JSON.stringify(value));
            const selectedObject = listCity.find(city => city.value === value)
            handleIncrementCounter(selectedObject)
          }}
          renderInput={(params) => <TextField {...params} label="Odaberi grad" />
          }
        />
        <Box component="span" sx={{ p: 2 }}>
          <span>{city === null ? "" : temp}</span>
        </Box>

        <NativeSelect
          defaultValue={JSON.parse(localStorage.getItem("unit"))}
          onChange={(event, value) => { 
            setUnit(event.target.value);
            localStorage.setItem("unit", JSON.stringify(event.target.value));
          }
        }
        >
            <option value={celsius}>&#8451;</option>
            <option value={farenheit}>&#8457;</option>
        </NativeSelect>

          <div>
            {(JSON.parse(localStorage.getItem("city")) === null || JSON.parse(localStorage.getItem("unit")) === null) ?
            <Alert severity="info">Za prikaz trenutne temperature potrebno je odabrati grad i mjernu jedinicu.</Alert> : ""}

            {textError === (401 || 403) ? 
            <Alert severity="error">Dopuštenja za prikaz trenutne temperature su izmijenjena ili istekla.</Alert> : ""}

            {textError === (500 || 502 || 503 || 504) ? 
            <Alert severity="error">Server trenutno nije dostupan. Pokušajte kasnije.</Alert> : "" }
          </div>
          {}
    </div>
  )
}

export default GetCurrentTemp;
