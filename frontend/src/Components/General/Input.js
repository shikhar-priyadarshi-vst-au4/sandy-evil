import React, { Fragment } from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {FormControl, 
        TextField, 
        MenuItem, 
        InputLabel,
        Select } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import { Flex,} from '../Styled/Styled'
import {locations, inputFields, categories} from '../Data/data';        

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
                        handleChange, part }, ...rest ) => {
    const classes = useStyles();
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
        {inputFields.map((field, index) => <TextField
        id="outlined-secondary"
        key = {index}
        label={`${field}`}
        variant="outlined"
        color="primary"
        margin="normal"
        type={(field === 'Password')?field.toLowerCase():""}
        fullWidth/>
        )}
        <FormControl variant="outlined" className={classes.career}>
                    <InputLabel id="demo-simple-select-outlined-label">Area</InputLabel>
                    <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    label="Choose your Area"
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
                    fullWidth>
                    <MenuItem value="">
                        <em>Choose an Area</em>
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

/* <TextField
        id="outlined-secondary"
        label="Fullname"
        variant="outlined"
        color="primary"
        margin="normal"
        fullWidth/>
        <TextField
        id="outlined-secondary"
        label="Email"
        variant="outlined"
        color="primary"
        margin="normal"
        fullWidth/>
        <TextField
        id="outlined-secondary"
        label="Password"
        variant="outlined"
        color="primary"
        margin="normal"
        type="password"
        fullWidth/>
        
        <TextField
        id="outlined-secondary"
        label="Mobile"
        variant="outlined"
        color="primary"
        margin="normal"
        fullWidth/>
         */