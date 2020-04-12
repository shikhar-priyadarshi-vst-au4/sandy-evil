import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {FormControl, 
        TextField, 
        MenuItem, 
        InputLabel,
        Select } from '@material-ui/core';

import {locations} from '../Data/data';        

const useStyles = makeStyles((theme) => ({
    formControl :{
        margin : theme.spacing(1)
    }
  }));
export const Input = ({ city, service, setCity, setService, handleChange },...rest) => {
    const classes = useStyles();
    return(
        <Fragment>
            <TextField id="outlined-search" label="Search " type="search" variant="outlined"
             value={service}
             onChange = {(event) => handleChange(event,setService)}/>
              <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Choose your city</InputLabel>
                    <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={city}
                    onChange={(event) => handleChange(event, setCity)}
                    label="Choose your city"
                    >
                    <MenuItem value="">
                        <em>Choose a city</em>
                    </MenuItem>
                        {locations.map(({name}, index) =>  <MenuItem 
                        value={name}
                        key = {index}>{name}</MenuItem>)}
                    </Select>
             </FormControl>
        </Fragment>
    )
}


//menu-item should be in list item