/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';

export default class Listview extends Component<{}> {
  render() {

    let list = [];

    for (let i=1; i<=100;i++){

      list.push(<ListItem avatar key="item_{i}">
        <Left>
          <Thumbnail source={{ uri: 'http://blog.tomtalk.net/uploads/4c98a7abec05f06e9e95d1c235f613b2.jpg' }} />
        </Left>
        <Body>
          <Text>Kumar Pratik {i}</Text>
          <Text note>Doing what you like will always keep you happy ...</Text>
        </Body>
        <Right>
          <Text note>3:43 pm</Text>
        </Right>
      </ListItem>)
  }

    return (
      <Container>
        <Header />
        <Content>
          <List>
             {list}
          </List>
        </Content>
      </Container>
    );
  }

}
