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
    //header: null
  };

  componentDidMount() {}

  onChangeQuestion(text) {
    this.props.onChangeQuestion(text);
  }

  onChangeAnswer(text) {
    this.props.onChangeAnswer(text);
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
      <Button onPress={() => this.save()}>
        <Text>保存</Text>
      </Button>
      <Text>{this.props.memoItem.type}</Text>
      <Input onChangeText={text => this.onChangeQuestion(text)} value={this.props.memoItem.question}/>
      <Input multiline={true} numberOfLines={4} onChangeText={(text) => this.onChangeAnswer(text)} value={this.props.memoItem.answer}/>
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
