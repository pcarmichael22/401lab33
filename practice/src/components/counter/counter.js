import React, { useState, useContext } from 'react';
import { CounterContext } from './counterContext';

const Count = props => {
  const context = useContext(CounterContext);

  const styles = {
    container: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: '40%'
    },
    counter: {
      display: 'inline-block',
      fontSize: '1em',
      border: '2px solid #444',
      borderRadius: '50%',
      lineHeight: '5em',
      textAlign: 'center',
      width: '5em'
    },
    button: {
      height: '3em'
    }
  };

  return (
    <div style={styles.container}>
      <button style={styles.button} onClick={() => context.decrement()}>
        {' '}
        -{' '}
      </button>
      <span style={styles.counter}>{context.count}</span>
      <button style={styles.button} onClick={() => context.increment()}>
        {' '}
        +{' '}
      </button>
    </div>
  );
};

export default Count;
