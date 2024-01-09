import React from 'react'
import { Button, Grid } from '@mui/material'
const SubmitButton = () => {
  return (
  
          <Grid container sx={{ display: 'flex', justifyContent: 'center', padding: 5 }}>
              <Grid item>
                  <Button variant="contained" type='submit'>Submit</Button>
              </Grid>
          </Grid>
         
  )
}

export default SubmitButton