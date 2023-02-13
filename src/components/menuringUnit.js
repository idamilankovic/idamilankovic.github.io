import { MenuItem, Select } from '@mui/material';
import React from 'react';

function MenuringUnit() {
  return (
    <div>
        <Select defaultValue={"&#8451;"}>
            <MenuItem value={"&#8451;"}>&#8451;</MenuItem>
            <MenuItem value={"&#8457;"}>&#8457;</MenuItem>
        </Select>
    </div>
  )
}

export default MenuringUnit;