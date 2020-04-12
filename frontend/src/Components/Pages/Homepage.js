import React  from 'react';
import {Navbar} from '../Navbar/Navbar';
import { Form, List } from '../General/index.js';
import {mainBar, categories} from '../Data/data';
import { Container, Header,
            Block, Image,
            Section, Text,
            Flex } from '../Styled/Styled';

export const Main = ( props ) => {
    
    return(
            <Container>
                 <Header>
                    <Block/>
                    <Navbar mainBar = {mainBar} />
                    <div style={{display:"flex"}}>
                    <Image src = {'images/worker.jpg'} alt="failed"/>
                    <Form part = "homepage-header" />
                    </div>
                 </Header>                
             <Section>
                 <Text>What We Offers!</Text>
                 <Flex>
                     <List part = "homepage-section" 
                     categories={categories} />
                 </Flex>
             </Section>
             <Section>
                 1
             </Section>
            </Container>
    )

}
//<List categories = {categories} />