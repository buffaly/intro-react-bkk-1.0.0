import React, { Component } from 'react';
import './App.css';

import {Todo} from './Todo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                  <Todo buttonColor="red"/>
                </div>
                <div className="col-md-6">
                  <Todo buttonColor="green"/>
                </div>
                <div className="col-md-3">
                  <Todo buttonColor="blue"/>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
