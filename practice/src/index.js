import React from 'react';
import ReactDOM from 'react-dom';
import CounterContext from './components/counter/counterContext';

import App from './app.js';
import Count from './components/counter/counter';

class Main extends React.Component {
  render() {
    return (
      <CounterContext>
        <App />;
      </CounterContext>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
