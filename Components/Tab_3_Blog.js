import React, {Component} from 'react';
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
  Card,
  CardItem
} from 'native-base';
import Moment from 'moment';

export default class Blog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      err_msg: '',
      order_list: {
        data: {
          orderList: []
        }
      }
    };

    var url = 'http://api.x.mila66.com/order/list';

    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({access_token: UserLoginInfo.access_token, page: 1, pageSize: 10})
    }).then((response) => response.json()).then((responseData) => {
      if (responseData.status === true) {
        console.log(responseData);
        this.setState({order_list: responseData});
      } else {
        this.setState({err_msg: responseData.msg});
      }
    }).done()
  }

  render() {
    return (<Container>
      <Content>
        <Text>Blog</Text>
      </Content>
    </Container>);
  }
}
