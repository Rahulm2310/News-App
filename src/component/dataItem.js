import React, { Component } from 'react';
import {
  ListItem,
  Left,
  Right,
  Thumbnail,
  Body,
  Text,
  Button,
  View
} from 'native-base';
import * as Font from 'expo-font';
import TimeAgo from './time';

class DataItem extends Component {
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

  handlePress = () => {
    const { url, title } = this.data;
    this.props.onPress({ url, title });
  };

  render() {
    return (
      <ListItem thumbnail>
        <Left>
          <Thumbnail
            square
            source={{
              uri: this.data.urlToImage
                ? this.data.urlToImage
                : 'https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png'
            }}
          />
        </Left>
        <Body>
          <Text numberOfLines={2}>{this.data.title}</Text>
          <Text note numberOfLines={2}>
            {this.data.description}
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
              marginLeft: 0
            }}
          >
            <Text note>{this.data.source.name}</Text>
            <TimeAgo time={this.data.publishedAt} />
          </View>
        </Body>

        <Right>
          <Button transparent onPress={this.handlePress}>
            <Text>View</Text>
          </Button>
        </Right>
      </ListItem>
    );
  }
}

export default DataItem;
