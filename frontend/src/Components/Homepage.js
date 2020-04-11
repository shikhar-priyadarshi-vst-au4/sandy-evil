import React  from 'react';
import Styled from 'styled-components';
import {Navbar} from './Navbar/Navbar';
import {Form} from './General/Form';
import {mainBar} from './Data/data';
const Container = Styled.div`
margin : 0.5em 1em;
`;
const Block = Styled.div`
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
const Header = Styled.div`
position : relative;
`;
const Image = Styled.img`
width : 500px;
position : relative;
top : 3em;
left : 4em;
z-index : 1;
@media screen and (max-width : 1024px){
    display : none;
}
`;
const Section = Styled.section`
position : relative;
top : 10em;
z-index : 1;
`;
export const Main = ( props ) => {
    
    
    return(
            <Container>
                 <Header>
                    <Block/>
                    <Navbar mainBar = {mainBar} />
                    <div style={{display:"flex"}}>
                    <Image src = {'worker.jpg'} alt="failed"/>
                    <Form/>
                    </div>
                 </Header>                
             <Section>midway</Section>
            </Container>
    )

}