import React from 'react';
import GameOne from './component/GameOne/component'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import Timer from './component/Common/Timer/container'
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux'

const App = () =>{ //App component is the root element ( root view ) of the App
  
  return(
    <Provider store={store}>
    <Container>
        {/* A JSX comment */}
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
           <Timer/>
        </Content>


        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>

        
      </Container>
      </Provider>
  )
}

var styles = StyleSheet.create({
  ParentView:{
    height:"100%",
    flexDirection:'column',
    alignItems:'center'
  }
})



export default App;
