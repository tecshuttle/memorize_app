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

export default class Todo extends Component {
  
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
        <Text>{this.state.err_msg}</Text>
        {
          this.state.order_list.data.orderList.map((order) => <Card key={order.order_number} style={{
              marginLeft: 10,
              marginRight: 10
            }}>
            <CardItem header={true}>
              <Text>订单号：{order.order_number}</Text>
            </CardItem>
            <CardItem style={{
                borderTopWidth: 0.5
              }} bordered={true}>
              <Body>
                <Text>下单时间：{Moment(order.created_at * 1000).format('YYYY-MM-DD H:mm:ss')}</Text>
                <Text>订单状态：{order.order_status}</Text>
                <Text>支付状态：{order.pay_status}</Text>
                <Text>参保费：{order.product_amount}元</Text>
                <Text>服务费：{order.service_amount}元</Text>
                <Text>数量：{order.quantity}</Text>
                <Text>总额：{order.total_amount}元</Text>
              </Body>
            </CardItem>
          </Card>)
        }
      </Content>
    </Container>);
  }
}
