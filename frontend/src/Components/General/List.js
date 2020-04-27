import React, { Fragment, useState } from 'react';
import { makeStyles, Badge,
         Paper, Grid, Typography } from '@material-ui/core';
import  Alert from '@material-ui/lab/Alert';         
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Card, AlertBox, Image, KeyStroke} from './index';
import { chunk } from 'lodash';
import { Text, Position, Flex } from '../Styled/Styled'
const useStyle = makeStyles((theme) => ({
    list : {
        display : 'flex',
        flexDirection : 'column',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(56),
            height: theme.spacing(20),
            fontSize : "1.4em",
            textAlign : "center",
            padding : "1em 0em",
          },
    },
    info:{
        float : 'right',
        margin : '0.2em 1em',
        cursor : 'pointer',
        '&:hover':{
           color :'#ff1e56',
          
        }
    },
    search:{
        display : 'flex',
        margin: theme.spacing(2),
        justifyContent : 'space-evenly',
        fontSize : "0.5em",    
    },
    searchItem : {
        padding : '0.5em 1em',
        margin : '0em 0em 0.5em',
        border: '1px solid #ff1e56',
        borderRadius : '0.8em',
        color:'#ff1e56',
    },
    container : {
        margin : "8em 0em"
    },
    item : {
        padding : theme.spacing(1),
        margin  : theme.spacing(3)
    },
    signout :{ 
        margin  : "5em 0em"
    },
    paper : {
        padding : '1em 1em',
        margin:'1em 0em',
        fontSize : '100%',
        cursor:'pointer',

    }
}));         


export const List = ({ search : { city , services} = '', 
                       cancelCard, part, categories, qualities, ...rest}) => {
    const classes = useStyle();
    let [size, setSize] = useState({value : 1, ind:0 });
    let details = !!rest.data?chunk(Object.entries(rest.data),2):[];
    return ( <Fragment>

        { part === 'homepage-header' && (!!services.length? <div className = {classes.list}>
            <Paper elevation={3} >
               <div className={classes.info}>
               <FontAwesomeIcon icon={faTimes}
               onClick = {( ) => cancelCard( )}/>
               </div>
               <div style={{textAlign:"center"}}>Services Available</div>  
               <div className = {classes.search} >
               <div style={{fontSize : "1.4em"}}>
                  {city}
               </div>
               
               <div>
                    {services.map((val,
                        index) => <div key={index} 
                        className={classes.searchItem} >{val}</div>)}
               </div> 
               </div>
               
                </Paper> 
        </div>: <Alert severity="info"  onClose={() => {cancelCard( )}}>Service is not available!</Alert>)}
        
        { part === 'homepage-section' && (!!categories.length? <Fragment>
            {categories.map(({id,category}) => <Card name={category} service_id = {id}
            key={id} part = {'homepage-section'} />)}
        </Fragment>:"")}
        { part === 'homepage-section_quality' && qualities.map((data, index) =><Card 
                                                key={index}
                                                part={'homepage-section_quality'}
                                                {...data} />)} 
        
        { part === 'dashboard-profile' && 
        <Fragment>
                <Position margin={'8em 0em'}
                sm_margin = {'8em 0em'}>
            <Text>User Details</Text>
            <hr/>
            {details.map((val,index) => 
             <Flex key={index}>
             {val.map((item, id) => <Position key={id}
             sm_margin = {'0em'}
             margin={'1em 2em'}>
            <Text  sm_margin = {'1em'}
            sm_size = {'0.2em'}
            size={'0.8em'}>{item[0].slice(0,1).toUpperCase().concat(item[0].slice(1))}</Text>
             <Text sm_margin = {'1em'}  
             sm_size = {'0.2em'}
             size={'1.6em'}>{(['image','password','id'].includes(item[0]))?"********":item[1]}</Text>
             </Position>
             )}
               </Flex>        
            )}
            </Position>
             
            </Fragment>
        }
        { part === 'dashboard-settings' && <Fragment>
            <AlertBox part = 'dashboard-settings'/>
            </Fragment>}
        { part === 'dashboard-categories' && <Grid container 
         className={classes.container}>
             <Grid item xs={12}>
             <Text>Services as per profile</Text>
             <hr/>
             </Grid>
             
             {rest?.filtered?.map((value, index) => {
                 return(<Grid item xs={12} sm={3} key={index} className = {classes.item}>
                     <Paper elevation={4} className={classes.paper}>
                        <Text sm_margin = {'1em'}  
                            sm_size = {'0.2em'}
                            style={{margin : "0.5em 0em"}}
                            fontcolor = {'#ffffff'}
                            size={'1em'}>{`Service ${index+1}`}</Text>
                        <Text sm_margin = {'1em'}  
                            style={{margin : "0.3em 0em"}}
                            sm_size = {'0.2em'}
                            weight={'400'}
                            fontcolor = {'#ffffff'}
                            size={'1.2em'}>{value.service}</Text>
                        <Text sm_margin = {'1em'}
                            style={{margin : "0.1em 0em"}}
                            sm_size = {'0.2em'}
                            weight={'400'}
                            fontcolor = {'#ffffff'}
                            size={'1.2em'}> &#8377;{value.price}(Base Price)</Text>
                        
                     </Paper>
                 </Grid>)
             })}
            </Grid>}
            { part === 'dashboard-ticket' && <Grid container
            className={classes.container}>
              <Grid item xs={12}>
             <Text>Tickets</Text>
             <hr/>
             </Grid>  
                <Grid xs={12} sm={4}>
                    <Card part={'dashboard-ticket-matrix'} value={0}/>
                </Grid>
                <Grid xs={12} sm={7}>
                    <Card part={'dashboard-ticket-list'}/>
                </Grid>
                </Grid>}
            {part === 'dashboard-signout' && <Grid container 
            className={classes.signout}>
                <Grid item xs={6}>
                    <Image part = 'dashboard-signout'/>
                </Grid> 
                <Grid item xs={6}>
                <Grid item xs={12}>
                <Typography variant="h1" color="textPrimary">
                   Do you really want to leave?
                </Typography>
                </Grid>
                <Grid item xs={12}>
                   <KeyStroke part = 'dashboard-signout' logout={rest.logout}/> 
                </Grid>
              </Grid>
              </Grid>}
              {part === 'booking-page-services' && <Grid item>
                  {categories?.map((value, index)=>{
                      return(<Paper 
                        className={classes.paper}
                        elevation={index===size.ind?size.value:2}
                        key={index}
                        onMouseOver={()=>setSize({...size, ...{value : 8, ind : index}})}
                        onMouseOut={()=>setSize({...size, ...{value : 1, ind : 0}})}>
                            <Grid container>
                            <Grid item xs={6}>{value.category}</Grid>
                            <Grid item xs={6} style={{
                                textAlign : "end"
                            }}>
                                <Badge badgeContent={value.services.length} color="secondary"
                                variant={'standard'}/>
                                
                                </Grid>
                            </Grid>
                        </Paper>)
                  })}
                  </Grid>}    
              {part === 'booking-page-services-category' && <Paper variant={'outlined'}>categories</Paper>}    
              {part === 'booking-page-payment' && <Paper variant={'outlined'}>payment</Paper>}    
        </Fragment>)
}



