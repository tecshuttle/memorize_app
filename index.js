import {AppRegistry} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';
import Tab1 from './Components/Tab1';
import Tab2 from './Components/Tab2';
import Tab3 from './Components/Tab3';

const App = StackNavigator({
  Login: {
    screen: Login
  },
  Register: {
    screen: Register,
    header: 'none'
  },
  Home: {
    screen: Home
  }
});

//用户登录信息
UserLoginInfo = null;

AppRegistry.registerComponent('memorize_app', () => App);
