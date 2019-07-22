import React from 'react';

export default class Keypad extends React.Component {

  input = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <input type="password" name="password" onKeyUp={this.input}>Enter Password</input>
    );
  }
}
