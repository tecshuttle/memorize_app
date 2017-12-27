import React, {Component} from 'react';
import {addNavigationHelpers, StackNavigator} from 'react-navigation';
import {createStore, combineReducers} from 'redux'
import {Provider, connect} from 'react-redux';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Tab_0_Home';
import MemoAdd from './Components/Tab_1_Memo_add';

import memoReducer from './Reducers';

import memoItem from './Reducers/memo_item';
import memoList from './Reducers/memo_list';

const AppNavigator = StackNavigator({
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
  }
});

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Login'));

const navReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

const appReducer = combineReducers({nav: navReducer, memoItem: memoItem, memoList: memoList});

class App extends React.Component {
  render() {
    return (<AppNavigator navigation={addNavigationHelpers({dispatch: this.props.dispatch, state: this.props.nav})}/>);
  }
}

const mapStateToProps = (state) => ({nav: state.nav});

const AppWithNavigationState = connect(mapStateToProps)(App);

const store = createStore(appReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default class Root extends React.Component {
  render() {
    return (<Provider store={store}>
      <AppWithNavigationState/>
    </Provider>);
  }
}
