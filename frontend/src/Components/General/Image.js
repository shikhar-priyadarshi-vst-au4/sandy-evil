import React, { createRef, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { makeStyles, Card,  Avatar} from '@material-ui/core';
import  Skeleton  from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
    Skeleton : {
        backgroundColor : "ffffff",
        margin : "1em 8em"
    },
    image : {
        margin : "1em 9em",
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
    card : {
        display : "flex",
        justifyContent : "center"
    },
    list : {
        width : '100%',
        maxWidth : 360,
        backgroundColor : theme.palette.background.paper,
    }
  }));

export const Image = ({imageSelected, imageHandler},...rest) => {
    const classes = useStyles();    
    let inputRef = createRef();
    
    return(<Fragment>
        { !imageSelected.length ? 
             <Card variant={'outlined'} className={classes.card}>
               <Avatar alt="Remy Sharp" src="images/Carpenters.jpg" className={classes.image} /> : 
               </Card>:
              <div className={classes.Skeleton}>
              <input type="file" 
                     style = {{display : "none"}}
                     onChange = {( e ) => imageHandler( e )}
                     ref={(inputFile) => inputRef.current = inputFile}/>
               <Skeleton variant="rect" width={80} height={80}>
               <FontAwesomeIcon icon={faUserCircle} 
              style = {{cursor : "pointer", color:"#272727"}}
              size={'5x'} onClick = {( ) => inputRef.current.click( )}/>    
                 </Skeleton> </div>}
    </Fragment>)
}
