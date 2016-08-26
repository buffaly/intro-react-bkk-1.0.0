import React, { Component } from 'react';
import './bootstrap.css';
import './Todo.css';

export class Todo extends Component {

  render() {
    return (
      <div className="card clearfix">
          <div className="to-do-box">
              <h1 className="title">To-do-list</h1>
              <div className="form-box">
                  <input className="input-todo" placeholder="what do you want to do?" type="text"/>
                  <button className="bb-input button">Add</button>
              </div>

              <div className="list-box">
                  <div className="list-item">
                      <div className="text-list">To do item 1</div>
                      <div className="bb-action">x</div>
                  </div>
                  <div className="list-item">
                      <div className="text-list">To do item 2</div>
                      <div className="bb-action">x</div>
                  </div>
              </div>

          </div>

          <div className="tab-page">Page 1</div>
          <div className="second tab-page">Page 2</div>
          <div className="tab-page">Page 3</div>
      </div>
    );
  }
}
