import React, { Component } from 'react';
import './App.css';

import { NameForm } from './components/NameForm';

class App extends Component {
  render() {
    return (
      <div className="container">
        <NameForm/>
      </div>
    );
  }

}

export default App;
