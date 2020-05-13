import React, { Fragment, useState } from 'react';
import { makeStyles, Grid,
         Paper} from '@material-ui/core';
import { Text, CardImage, Flex } from '../Styled/Styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { KeyStroke } from './Button';
const useStyle = makeStyles((theme) => ({
    card : {
        margin : theme.spacing(2),
        padding : theme.spacing(0),
        borderRadius : '0.5em',
        cursor : 'pointer',
    },
    cardItems : {
        margin : theme.spacing(2),
        padding : theme.spacing(2),
        border : '1px solid #272727',
    }
}))



export const Card = (props) => {
    
    const classes = useStyle();
    let [elevation, setElevation] = useState(1);
    const { name, service_id, part, title, body, icon } = props;
    
    return(
        <Fragment>
        { part === 'homepage-section' && name && <Link to = {`/booking/${service_id}`} style={{textDecoration : "none"}}><Paper 
        elevation={elevation} onMouseOver={()=>setElevation(8)} 
        onMouseOut={()=>setElevation(1)}
        className={classes.card}>
              <CardImage src={`images/${name.concat(name==='Salon'?"":"s")}.jpg`} />
              <Text size={'1em'} sm_size={'1em'} weight={'400'} 
              cursor = {'pointer'}
              fontcolor={'#63686e'} padding={'0.8em'} sm_padding={'0.8em'}>{name}</Text>
              </Paper></Link>   }

        { part === 'homepage-section_quality' && <Paper variant="outlined"
          className={classes.card}>
            <Flex wrap={'none'} sm_wrap={'none'}>
                <FontAwesomeIcon icon={icon} 
                style={{margin:"0.5em 1em"}}
                size={'3x'}/>
                <div style={{margin:"1em 0.5em"}}>
                    <Text size={'1em'} sm_weight={'600'} sm_size={'1em'} 
                    weight={'500'} fontcolor={'#63686e'} padding={'0.4em'} sm_padding={'0.4em'}>{title}</Text>
                    <Text size={'1em'} 
                    sm_weight={'200'}  sm_size={'1em'}
                    weight={'200'} fontcolor={'#63686e'} padding={'0.4em'} sm_padding={'0.4em'}>{body}</Text>
                </div>
            </Flex>
            </Paper>}
            { part==='dashboard-ticket-matrix' && <Paper variant={'outlined'}  className={classes.card}>
                    <Flex alignItems={'center'} wrap={'no-wrap'}
                    style={{flexDirection:'column'}}>
                    <Text>No. of Tickets</Text>
                    <Text size={'4em'}>{props.Total}</Text>
                    <Text>Accepted</Text>
                    <Text size={'4em'}>{props.Accepted}</Text>
                    <Text>Completed</Text>
                    <Text size={'4em'}>{props.Completed}</Text>
                    </Flex>
                </Paper>}
            { part === 'dashboard-ticket-list' && <Paper
            className={classes.card}
            variant={'outlined'}>
                <Text>Ticket Bucket</Text>
                {props.tickets.map(val => <Paper key={val.id} className={classes.cardItems}
                variant={'outlined'}>
                <Grid container>
                    <Grid item xs={6}><Text size={'1em'}>Booking Id</Text></Grid>
                    <Grid item xs={6}>{val.Booking.id.slice(0,5)}</Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={6}><Text size={'1em'}>Status</Text></Grid>
                    <Grid item xs={6}>{val.Booking.status}</Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12}><Text size={'1.2em'}>Services</Text></Grid>
                    <Grid item>{val.Booking.services.map((value, index) =><Text 
                    key={index}
                    size={'1em'} style={
                       {
                        display : 'inline',
                        margin : '1em 1em 1em 0em'
                       }
                    }> 
                    {value.service}</Text>)}</Grid>
                    <Grid item xs={12}><Text size={'1em'}>Total(Inclusive of all charges)</Text></Grid>
                <Grid item xs={6}><Text size={'1em'}> &#8377; {val.Booking.balance}</Text></Grid>
                <Grid item xs={6}>
                    <KeyStroke part={'dashboard-ticket-list'} 
                    bookingId = {val.booking_id}
                    workerId = {val.worker_id}
                    updateTicket ={props.updateTicket}/>
                </Grid>
                </Grid>
                </Paper>)}
                </Paper>}             
        </Fragment>
    )
} 