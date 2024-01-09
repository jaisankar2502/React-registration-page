import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Grid } from '@mui/material';
export const Radiobutton = ({register}) => {
  return (
      <Grid spacing={2} style={{ marginTop: '20px' }}>
          <FormControl >
              <FormLabel id="row-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                  row
                  aria-labelledby="row-radio-buttons-group-label"
                  name="gender"
              >
                 <FormControlLabel value="female" control={<Radio {...register('gender')} />} label="Female" />
                  <FormControlLabel value="male" control={<Radio {...register('gender')} />} label="Male" />
                  <FormControlLabel value="other" control={<Radio {...register('gender')} />} label="Other" />
              </RadioGroup>
          </FormControl>
    </Grid>
      
  )
}
