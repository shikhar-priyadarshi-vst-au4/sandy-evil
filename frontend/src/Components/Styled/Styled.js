
import Styled from 'styled-components';


export const Container = Styled.div`
margin : 0.5em 1em;
`;
export const Block = Styled.div`
position : absolute;
left : 38em;
z-index : 0;
background-color : #33313b;
float : right;
width : 55%;
height : 1000px;
@media screen and (max-width : 1024px) {
    left : 15em;
    width : 64%;
}`
export const Header = Styled.div`
position : relative;
`;
export const Image = Styled.img`
width : 500px;
position : relative;
top : 3em;
left : 4em;
z-index : 1;
border-radius : 0.2em;
@media screen and (max-width : 1024px){
    display : none;
}
`;
export const Section = Styled.section`
position : relative;
top : 10em;
z-index : 1;
margin : 0em 0em 1em 3em;
@media screen and (max-width : 768px){
    margin : 0em 0em 1em 1em; 
}
`;

export const Text = Styled.div`
 font-size : ${props => props.size || '1.2em'} ;
 font-weight : ${props => props.weight|| '500'} ;
 letter-spacing : ${props => props.spacing || '1.5px'};
 color : ${props => props.fontColor || '#272727'};
 padding : ${props => props.padding || '0em'};
 @media screen and (max-width : 768px){
    font-size : ${props => props.size || '1em'};
    font-weight : ${props => props.weight|| '500'};
}`;        

export const Flex = Styled.div`
display : flex;
flex-wrap : wrap;
margin : 1em 1em;
@media screen and (max-width:768px){
margin : 1em;
}`;

export const CardImage = Styled.img`
 width : ${props => props.weight||'350px'};
 height : ${props => props.weight||'200px'};
 @media screen and (max-width : 768px){
    width : ${props => props.weight||'370px'};
    height : ${props => props.weight||'300px'};
}`;