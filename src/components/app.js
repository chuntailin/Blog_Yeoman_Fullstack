import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import * as reducers from '../reducers/index';
import Router from 'react-router';

const reducer = combineReducers(reducers);
const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware)(createStore);

const store = createStoreWithMiddleware(reducer);

const styles = {
  wrap: {
    display: 'flex',
    height: '100%',
    width: '100%'
  }
};

const App = React.createClass({
  render() {
    return (

      <div id='site' style={styles.wrap}>
        
      {this.props.children}
      </div>
    )
  }
});

export default App;
