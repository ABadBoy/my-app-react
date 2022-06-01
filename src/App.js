import logo from './logo.svg';
import './App.css';
import React from "react";
import Greet from "./components/Greet";

class App extends React.Component{
  render() {
    return (
        <div className="App">
          <p>Hello World!</p>
          <Greet/>
        </div>
    )
  }
}

export default App;
