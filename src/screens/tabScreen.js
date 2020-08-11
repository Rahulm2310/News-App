import React, { Component } from 'react';
import * as Font from 'expo-font';
import { View, Text } from 'react-native';
import {
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  Left,
  Body,
  Title,
  Right
} from 'native-base';
import Tab1 from '../tabs/tab1';
import Tab2 from '../tabs/tab2';
import Tab3 from '../tabs/tab3';

export default class TabScreen extends Component {
  constructor(props) {
    super(props);

    this.data = props.data;
    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto_medium: require('../../assets/fonts/Roboto-Medium.ttf')
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <Container>
        <Header style={{ padding: 10, marginTop: 24 }}>
          <Left />
          <Body style={{ marginLeft: 100 }}>
            <Title>News App</Title>
          </Body>
          <Right />
        </Header>
        <Tabs>
          <Tab
            activeTabStyle={{ backgroundColor: '#5780d9' }}
            heading='General'
          >
            <Tab1 />
          </Tab>
          <Tab
            activeTabStyle={{ backgroundColor: '#5780d9' }}
            heading='Business'
          >
            <Tab2 />
          </Tab>
          <Tab
            activeTabStyle={{ backgroundColor: '#5780d9' }}
            heading='Technology'
          >
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
