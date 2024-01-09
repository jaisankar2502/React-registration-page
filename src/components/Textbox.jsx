import React from 'react'
import { TextField,FormLabel, Grid} from '@mui/material'
export const Textbox = ({register}) => {

  const formFields = [
    { label: 'FirstName', type: 'text' },
    { label: 'LastName', type: 'text' },
    { label: 'Email', type: 'email' },
  ];

  return (
    <>
    {
      formFields.map((value)=>(
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}   >
          <Grid item xs={6} md={4}>
            <FormLabel id="demo-row-radio-buttons-group-label">{value.label}</FormLabel>
          </Grid>
          <Grid item xs={6} md={8} sx={{ padding: 2 }} >
            <TextField {...{ ...register(value.label, { required: "Please enter your"+value.label })}} id="outlined-basic" label={value.label} variant="outlined" type={value.type} />
          </Grid>
        </Grid>
      ))
    }
     
    </>
   
    
    
  )
}