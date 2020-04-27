import React, { useState } from 'react';
import Styled from 'styled-components';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Logo } from './logo'
const Nav = Styled.nav`
position : ${props=>props.position||'relative'};
top : ${props=>props.top||'2em'};
left : ${props=>props.left||'2em'};
z-index : ${props=>props.index||'2'};
width : ${props=>props.width||'95%'};
height : ${props=>props.height||'100%'};
border : ${props=>props.border||'1px solid #272727'};
border-radius : ${props=>props.radius||'0.5em'};
background : ${props=>props.background||'#ffffff'};
@media screen and (max-width : 1024px){
    left : ${props=>props.sm_left||'0em'};
    top : ${props=>props.sm_top||'3em'};
    width : ${props=>props.sm_width||'100%'};
    height : ${props=>props.sm_height||'100%'};}`;    

const NavElem = Styled.div`
position : ${props=>props.navElem||'relative'};
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
margin : 1.2em 0.5em;
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
margin : 1em 0em 1em 2em;
@media screen and (min-width : 1025px){
    display : none;
}`;
const BrandName = Styled.div`
display : flex;
cursor : pointer;
`;
const Name = Styled.div`
margin : 0.2em;
font-size : 2em;    
`;
export const Navbar = ( props ) => {
    const [ toggle, setToggle ] = useState(false);
    
    const toggleClick = ( ) => {
       setToggle(!toggle);
    }
    
    const display = { display : "flex"};
    
    return(
        <Nav {...props}>
         <NavElem {...props}>
         <Brand>
         <BrandName as={Link} to={'/'} style={{textDecoration : "none", color:'#e40475'}}>
         <Logo/>
         <Name>Towny</Name>
         </BrandName>
         <Bar onClick = {() => toggleClick()}>
             <FontAwesomeIcon icon = {faBars} size={'2x'}/>
         </Bar>
         
         </Brand> 
          <UL style = {toggle?display : {}} >
              {props.mainBar?.map(({navLinkName, path},
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

              