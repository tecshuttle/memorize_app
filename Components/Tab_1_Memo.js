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
      list: []
    };

    var url = 'http://memo.tomtalk.net/getList_rn.php?item_type=active&uid=1';
    fetch(url).then((response) => response.json()).then((responseData) => {
      this.setState({list: responseData});
    }).catch(error => {
      console.error(error);
    }).done();
  }

  add() {
    this.props.navigation.navigate('MemoAdd');
  }

  render() {
    return (<Container>
      <Header>
        <Left>
          <Button transparent={true} onPress={() => this.add()}>
            <Icon name='add'/>
          </Button>
        </Left>
        <Body>
          <Title>分类</Title>
        </Body>
        <Right>
          <Button transparent={true}>
            <Icon name='ios-search'/>
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
