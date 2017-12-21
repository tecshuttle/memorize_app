import {AppRegistry} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Tab_0_Home';
import MemoAdd from './Components/Tab_1_Memo_add';

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
  },
  MemoAdd: {
    screen: MemoAdd
  },
});

//用户登录信息
UserLoginInfo = null;

AppRegistry.registerComponent('memorize_app', () => App);
