import React, { Fragment } from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {FormControl, 
        TextField, 
        MenuItem, 
        InputLabel,
        Select } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import { Flex,} from '../Styled/Styled'
import {locations, categories} from '../Data/data';        
const useStyles = makeStyles((theme) => ({
    formControl :{
        margin : theme.spacing(1)
    },
    career :{
        margin : "1em 0em"
    }
  }));
const theme = createMuiTheme({
    palette: {
      primary: grey
    },
  });  
export const Input = ( { city, service, 
                        setCity, setService,
                        createProfile, setCreateProfile,
                        handleChange,  part }, ...rest ) => {
    const classes = useStyles();
    const inputs = createProfile?Object.entries(createProfile):"";
    const ChangeHandler = (e) => {
        let { name, value } = e.target;
          setCreateProfile({...createProfile, [name] : value});
      }
    return(
        <Fragment>
        {part === 'homepage-header' && <Fragment>
           
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

        </Fragment>}

        {part === 'career' && <Fragment>
        <ThemeProvider theme={theme}>
        <Flex wrap={'none'} style={{flexDirection:"column"}} >
        {inputs.slice(0,4).map((field, index) => <TextField
        id={`outlined-secondary-${index}`}
        key = {index}
        label={`${field[0]}`}
        variant="outlined"
        color="primary"
        margin="normal"
        name={field[0]}
        value = {field[1]}
        type={(field[0] === 'Password')?field[0].toLowerCase():""}
        onChange = {(e) => ChangeHandler(e)}
        fullWidth/>
        )}
        <FormControl variant="outlined" className={classes.career}>
                    <InputLabel id="demo-simple-select-outlined-label">Area</InputLabel>
                    <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    label="Choose your Area"
                    value={inputs[4][1]}
                    name={inputs[4][0]}
                    onChange = {(e) => ChangeHandler(e)}
                    fullWidth>
                    <MenuItem value="">
                        <em>Choose an Area</em>
                    </MenuItem>
                        {locations.map(({name}, index) =>  <MenuItem 
                        value={name}
                        key = {index}>{name}</MenuItem>)}
                    </Select>
             </FormControl>
        <FormControl variant="outlined" className={classes.career}>
                    <InputLabel id="demo-simple-select-outlined-label">Work</InputLabel>
                    <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    label="Choose your specification"
                    value={inputs[5][1]}
                    name={inputs[5][0]}
                    onChange = {(e) => ChangeHandler(e)}
                    fullWidth>
                    <MenuItem value="">
                        <em>Select option</em>
                    </MenuItem>
                        {categories.map(({name}, index) =>  <MenuItem 
                        value={name}
                        key = {index}>{name}</MenuItem>)}
                    </Select>
             </FormControl>
        </Flex>
        </ThemeProvider>
            </Fragment>}
        </Fragment>
    )
}


//menu-item should be in list item

