import React, {Component} from 'react';
import {View, StyleSheet, AsyncStorage} from 'react-native';
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
  List,
  ListItem,
  Switch
} from 'native-base';

export default class Tab3 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  logout() {
    AsyncStorage.multiRemove([
      'username', 'password'
    ], err => {
      UserLoginInfo = null;
      this.props.navigation.navigate('Login')
    });
  }

  render() {
    return (<Container style={styles.wrap}>
      <Button block={true} danger={true} onPress={() => this.logout()}>
        <Text>退出</Text>
      </Button>
    </Container>);
  }
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
