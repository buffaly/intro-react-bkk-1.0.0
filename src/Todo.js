import React, { Component } from 'react';
import './bootstrap.css';
import './Todo.css';

export class Todo extends Component {

  state = {
    inputText: '',
    listItem: []
  }

  handleChangeText = (event) => {
    this.setState({inputText: event.target.value});
  }

  submitList = () => {
    this.setState({ 
      listItem: this.state.listItem.concat([this.state.inputText]),
      inputText: ''
    })
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.submitList();
    }
  }

  render() {
    return (
      <div className="card clearfix">
          <div className="to-do-box">
              <h1 className="title">To-do-list</h1>
              <div className="form-box">
                  <input className="input-todo"
                         type="text"
                         onChange={this.handleChangeText}
                         value={this.state.inputText}
                         placeholder="what do you want to do?"
                         onKeyPress={this.handleKeyPress}/>
                  <button className="bb-input button"
                          onClick={this.submitList}>Add</button>
              </div>
              {
                this.state.listItem.map((value, index) => {
                  return (
                    <h3 key={index + value}>{value}</h3>
                  );
                })
              }
          </div>
      </div>
    );
  }
}
