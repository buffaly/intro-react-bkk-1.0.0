import React, { Component } from 'react';
import './App.css';

import {Todo} from './Todo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                  <Todo />
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
