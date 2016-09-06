//React
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

// store.js
import { createStore } from 'redux';
import reducer from './reducer.js';

//Components
import Splash from './components/splash.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Provider store={this.props.store}>
        <Splash />
      </Provider>
    )
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const store = createStore(reducer);
  const root = document.getElementById("root");
  ReactDOM.render(<App store={store}/>, root);
});
