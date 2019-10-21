import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

// Two types of components
// Smart / Dumb

// Stateful or Class component -> Smart(state, process hooks)
// Functional component -> Dumb

class App extends Component {
  componentDidMount() {
    axios.get('/api/test')
      .then(res => {
        console.log(res.data);
      });
  }

  render() {
    return (
      <div>
        <h1>Our Header</h1>
      </div>
    )
  }
}

export default App;
