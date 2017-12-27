import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {connect} from 'react-redux';
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

class MemoAdd_ extends Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {}

  onChangeQuestion(text) {
    this.props.onChangeQuestion(text);
  }

  onChangeAnswer(text) {
    this.props.onChangeAnswer(text);
  }

  cancel() {
    this.props.navigation.goBack();
  }

  save() {
    let formData = new FormData();
    const item = this.props.memoItem;
    formData.append('_id', item._id);
    formData.append(
      'type_id', item.type_id
      ? item.type_id
      : 1);
    formData.append('question', item.question);
    formData.append('answer', item.answer);

    fetch('http://memo.tomtalk.net/rn_saveItem.php', {
      method: 'POST',
      body: formData
    }).then((response) => response.json()).then((responseData) => {
      console.log(responseData);
    }).catch(error => {
      console.error('item save', error);
    }).done();

    this.props.onSave(this.props.memoItem);
    this.props.navigation.goBack();
  }

  render() {
    return (<Container>
      <Header>
        <Left>
          <Button onPress={() => this.cancel()}>
            <Text>取消</Text>
          </Button>
        </Left>
        <Body style={{
            alignItems: 'center'
          }}>
          <Text>{this.props.memoItem.type}</Text>
        </Body>
        <Right>
          <Button onPress={() => this.save()}>
            <Text>保存</Text>
          </Button>
        </Right>
      </Header>

      <Content style={styles.content}>
        <Input style={styles.inputQuestion} placeholder='标题' placeholderTextColor='#aaa' multiline={true} onChangeText={text => this.onChangeQuestion(text)} value={this.props.memoItem.question}/>
        <Input style={styles.inputAnswer} placeholder='内容' placeholderTextColor='#aaa' multiline={true} numberOfLines={4} onChangeText={(text) => this.onChangeAnswer(text)} value={this.props.memoItem.answer}/>
      </Content>
    </Container>);
  }
}

const styles = StyleSheet.create({
  content: {
    marginLeft: 5,
    marginRight: 5
  },
  inputQuestion: {
    fontWeight: 'bold',
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'white',
    marginTop: 5,
    marginBottom: 5,
    //height: 40,
    //paddingTop: 0,
    //paddingBottom: 0
  },
  inputAnswer: {
    backgroundColor: 'white',
    textAlignVertical: 'top',
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10
  },
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

const mapStateToProps = (state, ownProps) => {
  return {memoItem: state.memoItem}
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChangeQuestion: (text) => {
      dispatch({type: 'ITEM_SET_QUESTION', question: text});
    },
    onChangeAnswer: (text) => {
      dispatch({type: 'ITEM_SET_ANSWER', answer: text});
    },
    onSave: (memo) => {
      dispatch({type: 'LIST_ITEM_UPDATE', memo: memo});
    }
  }
};

const MemoAdd = connect(mapStateToProps, mapDispatchToProps)(MemoAdd_);

export default MemoAdd
