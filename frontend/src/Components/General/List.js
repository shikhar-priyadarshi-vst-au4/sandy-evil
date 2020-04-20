import React, { Fragment } from 'react';
import { makeStyles,
         Paper } from '@material-ui/core';
import  Alert from '@material-ui/lab/Alert';         
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Card, AlertBox} from './index';
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
}));         


export const List = ({ search : { city , services} = '', 
                       cancelCard, part, categories, qualities, ...rest}) => {
    const classes = useStyle();
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
            {categories.map(({name},index) => <Card name={name} key={index} part = {'homepage-section'} />)}
        </Fragment>:"")}
        { part === 'homepage-section_quality' && qualities.map((data, index) =><Card 
                                                key={index}
                                                part={'homepage-section_quality'}
                                                {...data} />)} 
        
        { part === 'dashboard-profile' && 
        <Fragment>
                <Position margin={'6em 0em'}
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
        </Fragment>)
}



