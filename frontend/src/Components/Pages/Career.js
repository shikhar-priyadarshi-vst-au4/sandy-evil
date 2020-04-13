import React, { Fragment, useState } from 'react';
import { GridContainer, Text, ItemOne, ItemTwo, Position } from '../Styled/Styled'
import { Form } from '../General/index'
export const Career = (props) => {
    
    const [ hopOn, setHopOn ] = useState('SignUp'); 

    return(
    <Fragment>
        <GridContainer>
            <ItemOne>
                <Position >
                <Text fontColor ={'#ffffff'} size={'2em'} weight={'600'} spacing={'0.1em'}>Welcome to Towny</Text>
                <Position margin ={'2em 0.2em'} sm_margin = {'2em 0.2em'}>
                <Text fontColor ={'#ffffff'} size={'1.4em'} weight={'400'} spacing={'0.1em'}>Join Us!</Text>
                <Text fontColor ={'#ffffff'} size={'1.4em'} weight={'400'} spacing={'0.1em'}>To begin an incredible journey</Text>
                </Position>
                </Position>
            </ItemOne>
            <ItemTwo>
                { hopOn === 'SignUp' && <Form part = {'career'}/> }
            </ItemTwo>
        </GridContainer>
    </Fragment>
        )
}

//snapshot lifecycle in react
//useMediaquery (Custom hook)
//UseScroll position (Custom hook)
//Context API
//UseState
//UseEffect
//UseReducers