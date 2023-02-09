import React, {useState} from 'react';
import CallWeather from './callWeather';

function City() {
    const [city, setCity] = useState([''])

    const handleChange = (e) => {
        setCity(e.target.value)
    }
  return (
    <div>
        <select onChange={handleChange}>
            <option defaultValue={''}>-----</option>
            <option value="London">London</option>
            <option value="Zagreb">Zagreb</option>
            <option value="Amsterdam">Amsterdam</option>
            <option value="Maribor">Maribor</option>
            <option value="Madrid">Madrid</option>
        </select>
      <CallWeather city={city}/>
    </div>
  )
}
export default City;