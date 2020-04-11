import React, { useState } from 'react';
import Styled from 'styled-components';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Nav = Styled.nav`
position : relative;
top : 2em;
left : 2em;
z-index : 2;
width : 95%;
height : 100%;
border : 1px solid #272727;
border-radius : 0.5em;
background : #ffffff;
@media screen and (max-width : 1024px){
    left : 0em;
    top : 3em;
    width : 100%;
    height : 100%;
}`;    

const NavElem = Styled.div`
position : relative;
display : flex;
padding : 1em;
width : 100%;
@media screen and (max-width : 1024px){
flex-direction : column;
}`;

const Brand = Styled.div`
margin : 1em;
width : 30%;
display : flex;
justify-content : space-between;
@media screen and (max-width : 1024px){
    width : 75%;
}`;

const UL = Styled.div`
width : 100%; 
display : flex;
@media screen and (max-width : 1024px){
    flex-direction : column;
    display : none;
}`;

const List = Styled.div`
text-decoration : none;
margin : 1em 0.5em;
letter-spacing : 0.1em;
color : #4a4a48;
font-size : 0.8em;
font-weight : 620;
border : 1px solid #ffffff;
border-radius : 0.5em;
padding : 1.6em 3em;
cursor : pointer;
&:hover{
    border-color : #272727;
}
@media screen and (max-width : 1024px){
    width : fit-content;
}`;

const Bar = Styled.div`
@media screen and (min-width : 1025px){
    display : none;
}
`;
const Image = Styled.img`
width : 80px;`;
export const Navbar = ( props ) => {
    const [ toggle, setToggle ] = useState(false);
    
    const toggleClick = ( ) => {
       setToggle(!toggle);
    }
    
    const display = { display : "flex"};
    
    return(
        <Nav>
         <NavElem>
         <Brand>
         <Image src={'towny_logo.png'}  alt="loading..."/>
         <Bar onClick = {() => toggleClick()}>
             <FontAwesomeIcon icon = {faBars} size={'2x'}/>
         </Bar>
         
         </Brand> 
          <UL style = {toggle?display : {}}>
              {props.mainBar.map(({navLinkName, path},
               index) => <List 
                          as = {Link}
                          to = {path}
                          style = { navLinkName === 'Create Account'?{borderColor : "#272727"}: {} }
                          key={index} >{navLinkName}</List> 
              )}
          </UL>
          </NavElem>
        </Nav>
    )
}

              