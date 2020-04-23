import React from 'react';
import { AppLoading } from 'expo';
import  { Container, Header, Left, Body, Right, Button, Icon, Title, Text, Content, Thumbnail} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import * as Font from 'expo-font';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

    render() {
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";

    return (
      <Container>
      <Content>
        <Grid>
            <Row>
              <Col style={{ backgroundColor: '#635DB7', alignItems: 'center', paddingTop: 10 }}>
                <Thumbnail style={{ height:150, width:150 }} source={{uri: uri}} />
              </Col>   
            </Row>      
            <Row>  
              <Col style={{ backgroundColor: '#00bdaa', height: 200, alignItems: 'center', paddingTop: 10 }}>
                <Icon name='alarm' style={{fontSize: 30, color: 'white'}} />
              </Col>
              <Col style={{ backgroundColor: '#400082', height: 200 }}>
                
              </Col>
              <Col style={{ backgroundColor: '#fe346e', height: 200 }}>
                
              </Col>
              <Col style={{ backgroundColor: '#f1e7b6', height: 200 }}>
                
              </Col>
            </Row>
          </Grid>
      </Content>
    </Container>
    );
  }
}
