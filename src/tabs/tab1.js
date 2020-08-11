import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Left,
  Body,
  Right,
  Button
} from 'native-base';
import { getArticles } from '../service/news';
import DataItem from '../component/dataItem';
import Modal from '../component/modal';

class tab1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: null,
      setModalVisible: false,
      modalArticleData: {}
    };
  }

  componentDidMount() {
    getArticles('general').then(data => {
      this.setState({
        isLoading: false,
        data: data
      }),
        error => {
          Alert.alert('Error', 'Something went wrong');
        };
    });
  }

  handleItemDataOnPress = articleData => {
    this.setState({
      setModalVisible: true,
      modalArticleData: articleData
    });
  };

  handleModalClose = () => {
    this.setState({
      setModalVisible: false,
      modalArticleData: {}
    });
  };

  render() {
    let view = this.state.isLoading ? (
      <View
        style={{
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <ActivityIndicator animating={this.state.isLoading} />
        <Text style={{ marginTop: 10 }}>Please Wait...</Text>
      </View>
    ) : (
      <List
        dataArray={this.state.data}
        renderRow={item => {
          return <DataItem onPress={this.handleItemDataOnPress} data={item} />;
        }}
      />
    );

    return (
      <Container>
        <Content>{view}</Content>
        <Modal
          showModal={this.state.setModalVisible}
          articleData={this.state.modalArticleData}
          onClose={this.handleModalClose}
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'coral'
  }
});

export default tab1;
