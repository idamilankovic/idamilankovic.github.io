import { Autocomplete, TextField, Select, MenuItem, FormControl} from '@mui/material';
import React, {useState, useEffect} from 'react';
import cityList from './cityList';
import Axios  from 'axios';






function Form1() {
    const [unit, setUnit] = useState(localStorage.getItem("unit") ? localStorage.getItem("unit") : "")

    // () => {
    //     const savedUnit = localStorage.getItem("unit");
    //     console.log(savedUnit)
    //     const initialValue = savedUnit;
    //     //console.log(initialValue);
    //     return initialValue || "";
    // }

    const [city, setCity] = useState(localStorage.getItem("city") ? JSON.parse(localStorage.getItem("city")) : "");

    // () => {
    //     const savedCity = localStorage.getItem("city");
    //     const initialValue = JSON.parse(savedCity);
    //     console.log(initialValue)
    //     return initialValue || "";
    // }

    const [temp, setTemp] = useState(null);

    const handleChangeCity = (value) => {
        setCity(value);
        localStorage.setItem("city", JSON.stringify(value));
    };

    const handleChangeUnit = (value) => {
        setUnit(value);
        localStorage.setItem("unit", value);
    };

    useEffect(() => {
        setCity(localStorage.getItem("city"));
      }, []);

    useEffect(() => {
      setUnit(localStorage.getItem("unit"));
    }, []);

    // useEffect(() => {
    //     handleCurrentTemp(city); 
    //     console.log(city, unit)
    //     localStorage.setItem("city", JSON.stringify(city));
    //     localStorage.setItem("unit", unit)
    //   }, [city, unit]);

    //   useEffect(() => {
    //     console.log(unit)
    //     localStorage.setItem("unit", unit);
    //   }, [unit]);
      

      const handleCurrentTemp = (value) => {
        const cityValue = value;
        const apiKey = "40439c412414da357ad3df5b0e0cb2f0"
        Axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + cityValue + "&appid=" + apiKey).then((response) =>
        response.data).then((json) => {
            setTemp((json.main.temp - 273.15).toFixed(2))
        }
        )
    }

  return (
    <div>
        <Autocomplete
        id="combo-box-demo"
        options={cityList}
        sx={{ width: 200 }} 
        value={city.value}
        
        onChange={(event, value) => {handleChangeCity(value); handleCurrentTemp(value); console.log(value)}}
        renderInput={(params) => <TextField {...params} label="Odaberi grad" />}/>
        {console.log(city)}
  
        <span>{temp}</span>

        <FormControl>
            <Select
            defaultValue={"celsius"}
            onChange={(event, value) => handleChangeUnit(value.props.children)}>
                <MenuItem value={"celsius"}>&#8451;</MenuItem>
                <MenuItem value={"farenheit"}>&#8457;</MenuItem>
            </Select>
        </FormControl>

        {/* <Select 
        defaultValue={"&#8451;"}
        onChange={(event, value) => setUnit(value.props.children)}>    
            <MenuItem value={"&#8451;"}>&#8451;</MenuItem>
            <MenuItem value={"&#8457;"}>&#8457;</MenuItem>
        </Select> */}
    </div>
  )
}

export default Form1;