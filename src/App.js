import React, { Component } from 'react';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
          <div className="navbar-left">
              {this.props.children }
          </div>
      </div>
    );
  }
}

export default App;
