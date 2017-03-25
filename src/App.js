import React, { Component } from 'react';
import './App.css';
import CardHead from "./components/CardHead";
import CardCaption from "./components/CardCaption";

class App extends Component {

  render() {
    return (
      <div className="card">
        <CardHead/>
        <CardCaption />
      </div>
    );
  }
}

export default App;
