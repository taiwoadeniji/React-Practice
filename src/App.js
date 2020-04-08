import React from "react";
import logo from "./logo.svg";
import { Button, Icon} from "semantic-ui-react";
import "./App.css";
import MenuExampleSecondary from "./menu.js";
import FlagExampleFlag from "./flag.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MenuExampleSecondary />
        <h1>Welcome to React App!</h1>
        <FlagExampleFlag />
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
     </div>
  );
}

export default App;
