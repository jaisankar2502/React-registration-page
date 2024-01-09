import { Grid } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
const Dropdown = ({label,options,register}) => {
    const defaultOption = 'select'; //
  return (
      <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
              <InputLabel id="simple-select-label">{label}</InputLabel>
              <Select {...{...register(label)}}
                  labelId="simple-select-label"
                  id="simple-select"
                  label={label}
                  defaultValue={options[0]}
              >
                {
                    options.map((option,index)=>(
                        <MenuItem key={index} value={option}>{option}</MenuItem>
                    )) 
                }
              </Select>
          </FormControl>
      </Box>
  )
}

export default Dropdown