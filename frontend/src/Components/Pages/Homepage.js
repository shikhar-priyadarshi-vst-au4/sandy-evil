import React  from 'react';
import {Navbar} from '../Navbar/Navbar';
import { Form, List } from '../General/index.js';
import {mainBar, categories} from '../Data/data';
import { Container,
        Header,
        Block,
        Image,
        Section } from '../Styled/Styled';
export const Main = ( props ) => {
    
    return(
            <Container>
                 <Header>
                    <Block/>
                    <Navbar mainBar = {mainBar} />
                    <div style={{display:"flex"}}>
                    <Image src = {'images/worker.jpg'} alt="failed"/>
                    <Form/>
                    </div>
                 </Header>                
             <Section>
                 
             </Section>
            </Container>
    )

}
//<List categories = {categories} />