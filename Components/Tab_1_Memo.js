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
  Input,
  Card,
  CardItem
} from 'native-base';

export default class Memo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search_open: false,
      list: []
    };

    var url = 'http://memo.tomtalk.net/getList_rn.php?item_type=active&uid=1';
    fetch(url).then((response) => response.json()).then((responseData) => {
      this.setState({list: responseData});
    }).catch(error => {
      console.error(error);
    }).done();
  }

  componentDidMount() {
    //this.searchInput.focus();
  }

  add() {
    this.props.navigation.navigate('MemoAdd');
  }

  searchOpen() {
    this.setState({search_open: true});
    //this.searchInput.focus();
  }

  onSearchCancel() {
    this.setState({search_open: false});
  }

  render() {

    return (<Container>
      <Header style={this.state.search_open
          ? {
            display: 'none'
          }
          : {}}>
        <Left>
          <Button transparent={true} onPress={() => this.add()}>
            <Icon name='add'/>
          </Button>
        </Left>
        <Body>
          <Title>分类</Title>
        </Body>
        <Right>
          <Button transparent={true} onPress={() => this.searchOpen()}>
            <Icon name='ios-search'/>
          </Button>
        </Right>
      </Header>

      <Header searchBar={true} rounded={true} style={this.state.search_open
          ? {}
          : {
            display: 'none'
          }}>
        <Left>
          <Button transparent="transparent">
            <Text>取消</Text>
          </Button>
        </Left>
        <Item style={{
            width: '100%'
          }}>
          <Icon name="ios-search"/>
          <Input placeholder="Search" ref={input => this.searchInput = input} style={{width:'100%'}}/>
          <Icon name="ios-people"/>
        </Item>
        <Right>
          <Button transparent="transparent">
            <Text>取消</Text>
          </Button>
        </Right>
      </Header>

      <Content>
        {
          this.state.list.map((item, idx) => <Card key={'item_' + idx}>
            <CardItem>
              <Icon name='ios-pricetag'/>
              <Text>{item.type}</Text>
              <Text>{item.question}</Text>
            </CardItem>
            <CardItem>
              <Text>{item.answer}</Text>
            </CardItem>
          </Card>)
        }
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
