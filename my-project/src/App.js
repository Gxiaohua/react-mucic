import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Head from '@/views/common/header.js'
import Con from '@/views/common/content.js'
import { BrowserRouter as Router} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
              <div>
                <Head></Head>
                <Con></Con>
              </div>
          </Router>
      </div>
    );
  }
}

export default App;
