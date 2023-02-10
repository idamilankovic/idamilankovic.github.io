import React, { useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import cityList from './cityList';
import Axios from "axios";
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';

function City() {
  const [temp, setTemp] = useState('');


  const getCurrentTemp = (value) => {
        const cityValue = value;
        const apiKey = "40439c412414da357ad3df5b0e0cb2f0"
        Axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + cityValue + "&appid=" + apiKey).then((response) =>
        response.data).then((json) => {
            setTemp((json.main.temp - 273.15).toFixed(2))
        })
    }

    const handleChangeUnit = (e) => {
      const celsiusUnit = "&#8451;";
      const fahrenheitUnit = '&#8457;';
      if (e === celsiusUnit) {
        setTemp(temp)
      }
      else {
        setTemp(temp*1.8)
      }
      console.log(temp)
    }

  return (
    <div>
      <Autocomplete 
        id="combo-box-demo" 
        options={cityList} 
        onChange={(event, value) => getCurrentTemp(value)}
        sx={{ width: 200 }} 
        renderInput={(params) => <TextField {...params} label="Odaberi grad" />}/>
        <br/>
        <span>{temp}</span>
        <br/>


        <FormControl sx={{ width: 80 }} >
          <Select defaultValue={'&#8451;'}
            onChange={(e) => handleChangeUnit(e.target.value)}>
            <MenuItem value={'&#8451;'}>&#8451;</MenuItem>
            <MenuItem value={'&#8457;'}>&#8457;</MenuItem>
          </Select>
        </FormControl>
    </div>
  )
}
export default City;

