import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {
  Root,
  Container,
  Header,
  Body,
  Left,
  Right,
  Title,
  Icon,
  Content,
  Footer,
  FooterTab,
  Text,
  Button,
  ActionSheet,
  Tabs,
  Tab,
  Thumbnail,
  View,
  Subtitle,
  Item,
  Input
} from 'native-base';

export default class MemoAdd extends Component {
  static navigationOptions = {
    //header: null
  };

  constructor(props) {
    super(props);
    this.state = {
        list:[]
    };
  }

  render() {
    return (<Container>
      <Text>memo add</Text>
    </Container>);
  }
}

const styles = StyleSheet.create({
  avatar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  accountInfo: {
    flex: 1,
    justifyContent: 'center'
  },
  extraInfo: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  }
});
