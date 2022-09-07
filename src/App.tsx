import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyButton from "./components/MyButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyButton text="Click me"></MyButton>
      </header>
    </div>
  );
}

export default App;
