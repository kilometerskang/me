import React from 'react';

import { HashRouter, Route, Link } from 'react-router-dom'; 
import Projects from './Projects.js'; 
import Resume from './Resume.js';
import Extra from './Extra.js';
import { NavLink } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  state = {
    name: "Miles",
    btn: "I'm Feeling Scientific",
    prev: "",
    prevPrev: ""
  }

  handleUnitsBtn = () =>  {
    const units = ["Meters", "Furlongs", "Microfortnights", "Watts", "Bytes",
      "Joules", "Newtons", "Amperes", "Kilograms", "Seconds", "Inches"]
    do {
      var x = Math.floor(Math.random() * 11);
    }
    while (units[x] === this.prev || units[x] === this.prevPrev);
    this.prevPrev = this.prev;
    this.prev = units[x];
    this.setState({name: units[x]});
  };

  handleResetBtn = () => {
    this.setState({name: "Miles"});
  }

  render() {
    return (
      <HashRouter>
        <div className="App">
          <div id="top-banner">
            <button onClick={this.handleUnitsBtn} className="units-btn">
              {this.state.btn}
            </button>
            <button onClick={this.handleResetBtn} className="units-btn" id="reset-btn">
              Reset
            </button>
          </div>

          <div id="title">
            <h1><Link id="name-link" to="/">{this.state.name} Kang</Link></h1>
          </div>
          <div>
              <ul className="nav-bar">
                <li><NavLink activeClassName="active" to="/projects">Projects</NavLink></li>
                <li><NavLink activeClassName="active" to="/resume">Resume</NavLink></li>
                <li><NavLink activeClassName="active" to="/extra">Extra</NavLink></li>
              </ul>
          </div>

          <body>
            <Route exact path="/projects" component={Projects} />
            <Route path="/resume" component={Resume} />
            <Route path="/extra" component={Extra} />
          </body>

          <footer>
            <p>Contact: milesjkang@gmail.com</p>
            <p><a className="footer-link" href="https://github.com/kilometerskang/me">
            Click here for my code for this website.</a></p>
          </footer>
        </div>
      </HashRouter>
    );
  }
}

export default App;
