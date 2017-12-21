import React, {Component} from 'react';
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
  Form,
  Item,
  Input,
  Label
} from 'native-base';

export default class Register extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  login() {
    this.props.navigation.navigate('Login')
  }

  register() {
    this.props.navigation.navigate('Register')
  }

  render() {
    const {navigate} = this.props.navigation;

    return (<Container>
      <Content>
        <Form>
          <Item>
            <Label>邮箱</Label>
            <Input/>
          </Item>
          <Item>
            <Label>密码</Label>
            <Input/>
          </Item>
          <Item last={true}>
            <Label>密码确认</Label>
            <Input/>
          </Item>
        </Form>

        <Grid style={{
            marginTop: 10
          }}>
          <Col>
            <Button iconLeft="iconLeft" block={true} style={{
                marginLeft: 10
              }} onPress={this.login.bind(this)}>
              <Text>返回</Text>
            </Button>
          </Col>
          <Col>
            <Button iconRight="iconRight" block={true} style={{
                marginLeft: 10,
                marginRight: 10
              }} onPress={() => this.register()}>
              <Text>注册</Text>
            </Button>
          </Col>
        </Grid>
      </Content>
    </Container>);
  }
}
