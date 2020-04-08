import React from "react";
import logo from "./logo.svg";
import { Button, Icon, Flag, Segment } from "semantic-ui-react";
import "./App.css";
import "./menu.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <div className="ui secondary menu">
          <a className="active item" href="_blank">Home</a>
          <a class="item" href="_blank">React </a>
          <a class="item" href="_blank">Javascript</a>
          <a class="item" href="_blank">Node</a>
          <a class="item" href="_blank">C#</a>
          <a class="item" href="_blank">Python</a>
          
          
          <div class="right menu">
            <div class="item">
              <div class="ui icon input">
                <input type="text" placeholder="Search..." />
                <i aria-hidden="true" class="search icon"></i>
              </div>
            </div>
            <a class="item" href="_blank">Login</a>
          </div>
        </div>

        <h1>Welcome to React App!</h1>
        <Segment>
          <Flag name="ae" />
          <Flag name="france" />
          <Flag name="myanmar" />
        </Segment>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <p>Adding New Text!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button size="small" color="green">
          <Icon name="download" />
          Download
        </Button>
      </header>
      <div class="ui segment">
        <i class="ae flag"></i>
        <i class="france flag"></i>
        <i class="myanmar flag"></i>
      </div>
     </div>
  );
}

export default App;
