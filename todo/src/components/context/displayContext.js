import React from 'react';

export const DisplayContext = React.createContext();

class DisplayProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayCount: 0,
      displayCompleted: true,
      changeDisplayCountUp: this.changeDisplayCountUp,
      changeDisplayCountDown: this.changeDisplayCountDown,
      changeDisplayCompleted: this.changeDisplayCompleted
    };
  }

  changeDisplayCountUp = () => this.setState({ count: this.state.count + 1 });
  changeDisplayCountDown = () => this.setState({ count: this.state.count - 1 });
  changeDisplayCompleted = () => {
    if (this.state.displayCompleted === true) {
      this.setState({ displayCompleted: false });
    } else {
      this.setState({ displayCompleted: true });
    }
  };

  render() {
    return (
      <DisplayContext.Provider value={this.state}>
        {this.props.children}
      </DisplayContext.Provider>
    );
  }
}

export default DisplayProvider;
