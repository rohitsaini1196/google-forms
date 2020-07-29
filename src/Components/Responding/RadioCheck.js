import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

export default function ErrorRadios() {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);


  const handleRadioChange = (event) => {
      console.log(event.target.value);
      
    setValue(event.target.value);
    
    setError(false);
  };

  const handleSubmit = () => {
    console.log(value);
  };

  return (
    
        <div>
          <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>

          {["", "", ""].map((op, j)=>(
              <FormControlLabel key={j} value={j} control={<Radio />} label={"the worst"+ j} />
          ))}
        </RadioGroup>
        
        <Button variant="outlined" color="primary" className={classes.button} onClick={handleSubmit}>
          Check Answer
        </Button>
        </div>
      
  );
}