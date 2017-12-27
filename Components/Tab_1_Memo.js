import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';
import memoReducer from '../Reducers';

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

class Memo_ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search_open: false
    }
  }

  componentDidMount() {
    var url = 'http://memo.tomtalk.net/rn_getList.php?item_type=active&uid=1';

    fetch(url).then((response) => response.json()).then((responseData) => {
      this.props.setList(responseData);
    }).catch(error => {
      console.error('LOAD_LIST', error);
    }).done();
  }

  add() {
    this.props.resetItem();
    this.props.navigation.navigate('MemoAdd');
  }

  onMemoEdit(item) {
    this.props.setEditItem(item);
    this.props.navigation.navigate('MemoAdd');
  }

  searchOpen() {
    console.log(this);
    this.setState({search_open: true});
    //this.searchInput.focus();
  }

  onSearchCancel() {
    this.setState({search_open: false});
  }

  onSearch() {
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
        <Item style={{
            width: '100%'
          }}>
          <Icon name="ios-search"/>
          <Input placeholder="Search" ref={input => this.searchInput = input} style={{
              width: '100%'
            }}/>
          <Icon name="ios-people" onPress={() => this.onSearch()}/>
        </Item>
        <Button transparent={true}>
          <Text>取消</Text>
        </Button>
      </Header>

      <Content style={styles.content}>
        {
          this.props.memoList.map((item, idx) => <View style={styles.item} key={'item_' + idx}>
            <View style={styles.itemHeader}>
              <View style={styles.tag}>
                <Icon name='md-pricetag'/>
                <Text style={styles.memoType}>{item.type}</Text>
              </View>
              <Icon name='md-create' onPress={() => this.onMemoEdit(item)}/>
            </View>
            <View>
              <Text style={styles.question}>{item.question}</Text>
              <Text style={styles.answer}>{item.answer}</Text>
            </View>
          </View>)
        }
        <View style={styles.endList}>
          <Text style={styles.endMsg}>没有更多了！</Text>
        </View>
      </Content>
    </Container>);
  }
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#eee'
  },
  item: {
    marginTop: 4,
    marginBottom: 4
  },
  itemHeader: {
    paddingTop: 10,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  tag: {
    flexDirection: 'row'
  },
  memoType: {
    marginLeft: 7
  },
  question: {
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    fontWeight: 'bold'
  },
  answer: {
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10
  },
  endList: {
    padding: 20,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  endMsg: {
    color: '#aaa'
  }
});

const mapStateToProps = (state, ownProps) => {
  return {memoList: state.memoList}
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setList: (list) => {
      dispatch({type: 'SET_LIST', list: list});
    },
    resetItem() {
      dispatch({type: 'ITEM_RESET'})
    },
    setEditItem: (memo) => {
      dispatch({type: 'SET_EDIT_ITEM', memo: memo});
    }
  }
};

const Memo = connect(mapStateToProps, mapDispatchToProps)(Memo_);

export default Memo
