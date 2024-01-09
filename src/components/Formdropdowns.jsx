import React from 'react'
import Dropdown from './Dropdown';
import { Grid, Paper, Typography } from '@mui/material';
export const Formdropdowns = ({ register }) => {
  const countries = ['Country1', 'Country2', 'Country3'];
  const states = ['State1', 'State2', 'State3'];
  const districts = ['District1', 'District2', 'District3'];
  return (
    <Grid container spacing={1} sx={{ padding: 1 }}>
        <Grid item xs={12} sm={4}>
        <Dropdown register={register}
            label={"Country"}
            options={countries} 
          />
        </Grid>

        <Grid item xs={12} sm={4}>
        <Dropdown register={register}
            label={"State"}
            options={states}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
        <Dropdown register ={register}
            label={"District"}
            options={districts}
          />
        </Grid>
      </Grid>
  );
  
}
