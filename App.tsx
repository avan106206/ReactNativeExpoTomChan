import React from 'react';
import GameOne from './component/GameOne/component'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';



const App = () =>{ //App component is the root element ( root view ) of the App
  
  return(
    <Container>


        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>


        <Content>
          <Text>
            <GameOne/>
          </Text>
        </Content>


        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>

        
      </Container>
  )
}



export default App;
