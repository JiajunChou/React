import React, { Component } from 'react';
import './App.css';
import TextInput from './component/TextInput';

class App extends Component {
  render() {
    return (
      <TextInput initText="Try" />
    );
  }
}

export default App;