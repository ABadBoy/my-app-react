import logo from './logo.svg';
import './App.css';
import React from "react";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import MyFirstGrid from "./components/GridLayout"
import LineChart from "./components/LineChart"
import VisibilityToggle from "./components/VisibilityToggle";
import User from "./components/User";


class App extends React.Component{
  render() {
    return (
        <div className="App">
          {/*<EventBind/>
          <ClassClick/>
          <FunctionClick/>
          <Counter/>
          <Message/>
          <p>Hello World!</p>
          <Greet name="Angel"/>
          <Greet name="Mike"/>
          <Greet name="Jerry"/>
          <Welcome name="Nick"/>
          <Welcome name="Jim"/>
          <Welcome name="Jeff"/>*/}
          <LineChart/>
          <MyFirstGrid/>
          <VisibilityToggle/>
          <User name={"hello"} age={18}/>
        </div>
    );
  }
}

export default App;
