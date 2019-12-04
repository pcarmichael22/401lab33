import React from 'react';

import Counter from './components/counter/counter.js';
import CounterContext from './components/counter/counterContext';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Counter />
      </>
    );
  }
}
