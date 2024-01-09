import React from 'react';
import { Grid, FormLabel } from '@mui/material';
import { MuiTelInput, matchIsValidTel } from 'mui-tel-input';

const Phonenumbercomponent = ({ register }) => {
    const [value, setValue] = React.useState('');
    const [isValidTel, setIsValidTel] = React.useState(true);

    const handleChange = (newValue) => {
        const isValid = matchIsValidTel(newValue);
        console.log('Is Valid Tel:', isValid);
        setIsValidTel(isValid);
        setValue(newValue);
    };

    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={6} md={4}>
                <FormLabel id="demo-row-radio-buttons-group-label">Phone</FormLabel>
            </Grid>
            <Grid item xs={6} md={8} sx={{ padding: 2 }}>
                <MuiTelInput
                    {...register('phone')}
                    defaultCountry="IN"
                    value={value}
                    onChange={handleChange}
                    helperText={!isValidTel ? 'Phone number is invalid' : ''}
                    error={!isValidTel}
                />
            </Grid>
        </Grid>
    );
};

export default Phonenumbercomponent;