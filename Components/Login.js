import React, {Component} from 'react';
import {Image, View, TextInput, AsyncStorage} from 'react-native'
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

export default class Login extends Component {

  static navigationOptions = {
    header: null
  };

  userNameChange = (text) => {
    this.setState({err_msg: ''});
    this.setState({username: text})
  };

  passwordChange = (text) => {
    this.setState({err_msg: ''});
    this.setState({password: text})
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      err_msg: '',
      hasAccount: null
    };
  }

  componentWillMount() {
    if (UserLoginInfo === null) {
      AsyncStorage.multiGet([
        'username', 'password'
      ], (err, stores) => {
        if (stores[0][1] !== null && stores[1][1] !== null) {
          this.setState({username: stores[0][1]
          });
          this.setState({password: stores[1][1]
          });
          this.setState({hasAccount: true});
          this.login();
        } else {
          // 输入帐户、密码登录
          this.setState({hasAccount: false});
        }
      });
    } else {
      this.goHome();
    }
  }

  login() {
    var url = 'http://oauth.x.mila66.com/oauth/access_token?grant_type=password&client_id=100000&client_secret=admin123&' + 'username=' + this.state.username + '&password=' + this.state.password;

    fetch(url).then((response) => response.json()).then((responseData) => {
      if (responseData.status === true && responseData.ownerType === 'user') {
        UserLoginInfo = responseData;
        AsyncStorage.setItem('username', this.state.username);
        AsyncStorage.setItem('password', this.state.password);
        this.goHome();
      } else {
        this.setState({err_msg: '用户名或密码错误！'})
      }
    }).catch(error => {
      this.setState({err_msg: '网络正忙！'})
    }).done()
  }

  goHome() {
    this.props.navigation.navigate('Home', {name: 'Jane'});
  }

  register() {
    this.props.navigation.navigate('Register');
  }

  render() {
    var screen = <Container>
      <Content>
        <Image source={require('../imgs/login-bg.jpg')} style={{
            height: 350
          }}/>

        <Form>
          <Item >
            <Input value={this.state.username} onChangeText={this.userNameChange} placeholder='请输入注册邮箱'/>
          </Item>
          <Item last={true}>
            <Input value={this.state.password} onChangeText={this.passwordChange} placeholder='请输入登录密码' secureTextEntry={true}/>
          </Item>
          <Text style={{
              color: 'red',
              marginTop: 6,
              marginLeft: 15
            }}>{this.state.err_msg}</Text>
        </Form>

        <Grid style={{
            marginTop: 10
          }}>
          <Col>
            <Button style={{
                marginLeft: 10
              }} block={true} onPress={() => this.login()}>
              <Text>登录</Text>
            </Button>
          </Col>
          <Col>
            <Button style={{
                marginLeft: 10,
                marginRight: 10
              }} block={true} onPress={() => this.register()}>
              <Text>注册</Text>
            </Button>
          </Col>
        </Grid>
      </Content>
    </Container>;

    if (this.state.hasAccount === null || this.state.hasAccount === true) {
      screen = <View></View>
    }

    return screen;
  }
}
