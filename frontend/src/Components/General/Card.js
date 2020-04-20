import React, { Fragment } from 'react';
import { makeStyles,
         Paper} from '@material-ui/core';
import { Text, CardImage, Flex } from '../Styled/Styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const useStyle = makeStyles((theme) => ({
    card : {
        margin : theme.spacing(2),
        padding : theme.spacing(0),
        borderRadius : '0.5em',
    }
}))



export const Card = (props) => {
    
    const classes = useStyle();
    const { name, part, title, body, icon } = props;
    return(
        <Fragment>
        { part === 'homepage-section' && <Paper elevation={1} className={classes.card}>
              <CardImage src={`images/${name}.jpg`} />
              <Text size={'1em'} sm_size={'1em'} weight={'400'} fontcolor={'#63686e'} padding={'0.8em'} sm_padding={'0.8em'}>{name}</Text>
              </Paper>   }

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
        </Fragment>
    )
} 