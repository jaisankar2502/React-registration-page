import React from 'react';
import { MuiTelInput, matchIsValidTel } from 'mui-tel-input';
import { Grid, FormLabel } from '@mui/material';

const Phonenumbercomponent = ({register}) => {
    const [value, setValue] = React.useState('+91 9656851823');

    const handleChange = (newValue) => {
        const isValidTel = matchIsValidTel(newValue);
        console.log('Is Valid Tel:', isValidTel);
        setValue(newValue);
    };

    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={6} md={4} >
                <FormLabel id="demo-row-radio-buttons-group-label">phone</FormLabel>
            </Grid>
            <Grid item xs={6} md={8} sx={{ padding: 2 }}>
                <MuiTelInput  {...{ ...register('phone') }}
                    defaultCountry="IN"
                    value={value}
                    onChange={handleChange}
                />

            </Grid>
            
        </Grid>
        
    );
}; 
export default Phonenumbercomponent;