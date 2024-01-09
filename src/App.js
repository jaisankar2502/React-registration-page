  import './App.css';
  import { Textbox } from './components/Textbox';
  import SubmitButton from './components/SubmitButton';
  import { Radiobutton } from './components/Radiobutton';
  import {  Formdropdowns } from './components/Formdropdowns';
  import { Grid, Typography} from '@mui/material';
  import { useForm } from "react-hook-form";
import Phonenumbercomponent from './components/Phonenumbercomponent';

  function App() {
    const { register, control, handleSubmit, formState: { errors } } = useForm({ shouldUseNativeValidation: true});
    const onSubmit = data => console.log("hello",data);

    return(
      <div className='form_container'>
        <Grid style={{borderBlockStyle:'solid' ,padding:'5px', background:''}}>
          <Typography variant="h4" align="center" gutterBottom padding={2}>
            Registration
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} >
            < Textbox register={register} />
            <Phonenumbercomponent register={register} />
            <Formdropdowns register={register} />
            <Radiobutton register={register} />
            <SubmitButton />
          </form>
          
        </Grid>
      </div>
  
    ) 
  
  }

  export default App;
