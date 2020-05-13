import React, {useState, useEffect, Fragment} from 'react';
import {connect} from 'react-redux';
import { Grid, Paper, makeStyles, 
  //  Typography
 } from '@material-ui/core'
import {mapStateToProps} from '../StateTransition/index'
import { assignBooking } from '../../Actions/booking';
import { LinearDeterminate } from '../General/index'
const useStyles = makeStyles(theme => ({
    paper : {
        margin : theme.spacing(2),
        padding : theme.spacing(2),
        border : '1px solid #ff1e56',
    }
}))
const Assign = ({bookingdata, bookingError,
                afterassigned, match : { params : { domain, bookingId }},...props}) => {
    const classes = useStyles();
    let [loading, setLoading] = useState(true);
    let [message, setMessage] = useState('');
    let [completed, setCompleted] = useState(0);
    useEffect(()=>{
            props.dispatch(assignBooking(domain, bookingId));
            // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(() => {
        let timer = setInterval(( ) => {
          setCompleted((oldCompleted) => {
            if (oldCompleted === 100) {
                 clearInterval(timer);
                 setLoading(false)             
            }
            const diff = Math.random() * 10;
            return Math.min(oldCompleted + diff, 100);
          });
        }, 500)
        return () => {
          clearInterval(timer);
        }
      },[]);
      
    useEffect(( ) => {
        if(!!bookingdata && !afterassigned){
            let Message = `Booking has been made successfully and
            worker will be assigned shortly.`
            setMessage(Message);
    
        }
        else if(!!bookingError){
           setMessage(bookingError);
    
        }
        else if(!!afterassigned){
            let Message=`Worker is Assigned`
            setMessage(Message)
            }
        else{
            setMessage('');
        }    
    },[ bookingdata, bookingError, afterassigned ]) 
    // console.table(afterassigned);
    return (
        <Fragment>
            <Grid container>
                {loading && <Paper component={Grid} item xs={12}>
                    <LinearDeterminate completed={completed} />
                </Paper>}
                {!loading &&
                <Grid container>
                <Paper component={Grid} className={classes.paper} item xs={12} variant={'outlined'}>
                    {message}    
                </Paper>
                  
                </Grid>
                }
            </Grid>
        </Fragment>
    )
}

export default connect(mapStateToProps)(Assign);


// {/* <Paper component={Grid} className={classes.paper} item xs={12} variant={'outlined'}>
// {/* <Grid container>
// <Typography variant={'h6'}>Order Id</Typography>
// <Typography variant={'body2'}>{afterassigned?.id?.slice(0,5)}</Typography>
// </Grid>
// <Grid container>     
// <Typography variant={'h6'}>{'Assigned'}</Typography>
// <Typography variant={'body2'}>
// {afterassigned?.Worker.name}" | "{afterassigned?.Worker.mobileNumber}</Typography>
// </Grid>
// <Fragment>
// {afterassigned?.services.map(val => 
// <Typography key={val.price}>{val.service}</Typography>)}
// <Typography variant={'button'}>&#8377; {afterassigned.balance}</Typography>
// </Fragment> */}
// </Paper> */}