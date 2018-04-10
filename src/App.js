import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      address: ''
    };
    
  }

  render() {
    return (
    <div>
      <h3>Neo to Gas baby</h3>
    </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));