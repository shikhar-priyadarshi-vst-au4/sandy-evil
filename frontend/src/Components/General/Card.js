import React, { Fragment } from 'react';
import { makeStyles,
         Paper} from '@material-ui/core';
import { Text, CardImage } from '../Styled/Styled'
const useStyle = makeStyles((theme) => ({
    card : {
        margin : theme.spacing(2),
        padding : theme.spacing(0)
    }
}))



export const Card = (props) => {
    
    const classes = useStyle();
    const {name} = props;
    return(
        <Fragment>
          <Paper elevation={1} className={classes.card}>
              <CardImage src={`images/${name}.jpg`} />
              <Text size={'1em'} weight={'400'} fontColor={'#63686e'} padding={'0.8em'}>{name}</Text>
              </Paper>       
        </Fragment>
    )
} 