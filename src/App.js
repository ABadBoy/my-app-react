import logo from './logo.svg';
import './App.css';
import React from "react";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/hello";

class App extends React.Component{
  render() {
    return (
        <div className="App">
          <p>Hello World!</p>
          <Greet name="Angel"/>
          <Greet name="Mike"/>
          <Greet name="Jerry"/>
          <Welcome name="Nick"/>
          <Welcome name="Jim"/>
          <Welcome name="Jeff"/>
        </div>
    )
  }
}

export default App;
