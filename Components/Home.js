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
import Tab1 from './Tab1'
import Tab2 from './Tab2'
import Tab3 from './Tab3'

export default class Home extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (<Container>
      <Tabs initialPage={0} tabBarPosition='bottom'>
        <Tab heading={<TabHeading><Icon name="person" /><Text>帐户</Text></TabHeading>}>
          <Tab1/>
        </Tab>
        <Tab heading={<TabHeading><Icon name="paper" /><Text>参保</Text></TabHeading>}>
          <Tab2/>
        </Tab>
        <Tab heading={<TabHeading><Icon name="settings" /><Text>设置</Text></TabHeading>}>
          <Tab3 navigation={this.props.navigation}/>
        </Tab>
      </Tabs>
    </Container>);
  }
}
