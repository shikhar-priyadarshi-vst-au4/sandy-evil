
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
@media screen and (max-width : 1024px){
    display : none;
}
`;
export const Section = Styled.section`
position : relative;
top : 10em;
z-index : 1;
`;
