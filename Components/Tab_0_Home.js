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
  TabHeading
} from 'native-base';
import Memo from './Tab_1_Memo'
import Todo from './Tab_2_Todo'
import Blog from './Tab_3_Blog'
import Photo from './Tab_4_Photo'
import More from './Tab_5_More'

export default class Home extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let tab_heading_1 = <TabHeading>
      <Icon name="pricetag"/>
    </TabHeading>

    let tab_heading_2 = <TabHeading>
      <Icon name="ios-list-box"/>
    </TabHeading>

    let tab_heading_3 = <TabHeading>
      <Icon name="ios-create"/>
    </TabHeading>

    let tab_heading_4 = <TabHeading>
      <Icon name="ios-photos"/>
    </TabHeading>

    let tab_heading_5 = <TabHeading>
      <Icon name="ios-more"/>
    </TabHeading>

    return (<Container>
      <Tabs initialPage={0} tabBarPosition='bottom'>
        <Tab heading={tab_heading_1}>
          <Memo navigation={this.props.navigation}/>
        </Tab>
        <Tab heading={tab_heading_2}>
          <Todo/>
        </Tab>
        <Tab heading={tab_heading_3}>
          <Blog/>
        </Tab>
        <Tab heading={tab_heading_4}>
          <Photo/>
        </Tab>
        <Tab heading={tab_heading_5}>
          <More navigation={this.props.navigation}/>
        </Tab>
      </Tabs>
    </Container>);
  }
}
