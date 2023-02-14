import { Autocomplete, TextField, Select, MenuItem, FormControl} from '@mui/material';
import React, {useState, useEffect} from 'react';
import cityList from './cityList';
import Axios  from 'axios';
import MesurinUnits from './menuringUnit';

function Form1() {
    // const [unit, setUnit] = useState(localStorage.getItem("unit") ? JSON.parse(localStorage.getItem("unit")) : "");
    // const [city, setCity] = useState(localStorage.getItem("city") ? JSON.parse(localStorage.getItem("city")) : "");
    // const [temp, setTemp] = useState(null);

    const celsius = "&#8451;";
    const farenheit = "&#8457;"

    const [unit, setUnit] = useState(() => {
      const savedUnit = localStorage.getItem("unit");
      const initialValue = savedUnit;
      console.log(initialValue)
      return initialValue || "";
    }
    )

    const [city, setCity] = useState(() => {
      const savedCity = localStorage.getItem("city");
      const initialValue = JSON.parse(savedCity);
      console.log(initialValue)
      return initialValue || "";
    })
    const [temp, setTemp] = useState(null);

    // () => {
    //     const savedUnit = localStorage.getItem("unit");
    //     console.log(savedUnit)
    //     const initialValue = savedUnit;
    //     //console.log(initialValue);
    //     return initialValue || "";
    // }

    // () => {
    //     const savedCity = localStorage.getItem("city");
    //     const initialValue = JSON.parse(savedCity);
    //     console.log(initialValue)
    //     return initialValue || "";
    // }

  
    // const handleChangeCity = (value) => {
    //     setCity(value);
    //     localStorage.setItem("city", JSON.stringify(value));
    // };

    // const handleChangeUnit = (value) => {
    //     setUnit(value);
    //     localStorage.setItem("unit", unit);
    // };

    useEffect(() => {
        setCity(localStorage.getItem("city"));
      }, [city]);

    useEffect(() => {
      setUnit(localStorage.getItem("unit"));
    }, [unit]);

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
             {unit==="&#8451;" ? setTemp((json.main.temp - 273.15).toFixed(2)) : setTemp(((json.main.temp - 273.15).toFixed(2))*1.8)}
            // setTemp((json.main.temp - 273.15).toFixed(2))
        }
        )
    }
  return (
    <div>
        {/* <Autocomplete
        id="combo-box-demo"
        options={cityList.value}
        sx={{ width: 200 }} 
        onChange={(event, value) => {
          setCity(value); 
          handleCurrentTemp(value);
          localStorage.setItem("city", JSON.stringify(value));
        console.log(value) }}
        renderInput={(params) => <TextField {...params} label="Odaberi grad" />
        }/> */}

        <Autocomplete
        id="combo-box-demo"
        options={Object.values(cityList).map((city) => city.value)}
        sx={{ width: 200 }} 
        onChange={(event, value) => {
          setCity(value);
          handleCurrentTemp(value);
          localStorage.setItem("city", JSON.stringify(value))
        }}
        renderInput={(params) => <TextField {...params} label="Odaberi grad" />
        }/>

        {/* <span>{temp}</span> */}
        <span>
          {temp}
          {/* {console.log(unit, temp)} */}
        </span>

        <Select
        defaultValue={MesurinUnits[0].value}
        value={unit}
        options={Object.values(MesurinUnits).map((unit) => unit.value)}
        onChange={() => { 
          setUnit(MesurinUnits[0].value);
          localStorage.setItem("unit", JSON.stringify(unit))
        }}>
            <MenuItem value={celsius}>&#8451;</MenuItem>
            <MenuItem value={farenheit}>&#8457;</MenuItem>
        </Select>
    </div>
  )
}

export default Form1;