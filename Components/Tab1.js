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
  View
} from 'native-base';

export default class Tab1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      err_msg: '',
      user_info: {
        data: {}
      }
    };

    var url = 'http://account.x.mila66.com/api/user/info?access_token=' + UserLoginInfo.access_token;

    fetch(url).then((response) => response.json()).then((responseData) => {
      if (responseData.status === true) {
        this.setState({user_info: responseData});
      } else {
        this.setState({err_msg: responseData.msg})
      }
    }).catch(error => {
      console.error(error);
    }).done();
  }

  render() {
    return (<Container>
      <Content>
        <Text>{this.state.err_msg}</Text>

        <Grid>
          <Col style={styles.avatar}>
            <Thumbnail source={{
                uri: 'http://www.tomtalk.net/tt_logo.png'
              }} large="large"/>
          </Col>

          <Col style={styles.accountInfo}>
            <Text>手机：{this.state.user_info.data.mobile}</Text>
            <Text>余额：{this.state.user_info.data.my_money}元</Text>
          </Col>
        </Grid>
      </Content>
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
