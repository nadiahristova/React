import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from 'react-router-dom';
import './App.css';

import * as pages from './pages';
function Home() {
  return (
    <h1>
      <span role="img" aria-label="hi">
        Homework Lesson 1
      </span>
    </h1>
  );
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          {Object.keys(pages).map((name, i) => (
            <NavLink to={`/${name.toLowerCase()}`} key={i}>
              {name}
            </NavLink>
          ))}
        </nav>
        <Switch>
          {Object.keys(pages).map((name, i) => (
            <Route path={`/${name.toLowerCase()}`} key={i}>
              {React.createElement(pages[name])}
            </Route>
          ))}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
      /*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>*/
  );
}

export default App;
