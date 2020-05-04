import React from 'react';

import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';
import Home from './Home.js';
import Projects from './Projects.js'; 
import Resume from './Resume.js';
import Extra from './Extra.js';
import { NavLink } from 'react-router-dom';

class App extends React.Component {
  state = {
    name: "Miles",
    btn: "I'm Feeling Scientific",
    prev: null,
    prev_prev: null
  }

  handleUnitsBtn = () =>  {
    const units = ["Meters", "Furlongs", "Microfortnights", "Watts", "Bytes",
      "Joules", "Newtons", "Amperes", "Kilograms", "Seconds", "Inches"]
    do {
      var x = Math.floor(Math.random() * 11);
    }
    while (units[x] === this.prev || units[x] === this.prev_prev);
    this.prev_prev = this.prev;
    this.prev = units[x];
    this.setState({name: units[x]});
  };

  handleResetBtn = () => {
    this.setState({name: "Miles"});
  }

  render() {
    return (
      <BrowserRouter>
        <Route path="/" render={() => (
          <Redirect to="/home"/>
        )}/>
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
            <h1><Link id="name-link" to="/home">{this.state.name} Kang</Link></h1>
          </div>
          <ul className="nav-bar">
            <li><NavLink className="nav-item" activeClassName="active" to="/home">Home</NavLink></li>
            <li><NavLink className="nav-item" activeClassName="active" to="/projects">Projects</NavLink></li>
            <li><NavLink className="nav-item" activeClassName="active" to="/resume">Resume</NavLink></li>
            <li><NavLink className="nav-item" activeClassName="active" to="/extra">Extra</NavLink></li>
          </ul>

          <div className="dope-bg">
            <Route path="/home" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/resume" component={Resume} />
            <Route path="/extra" component={Extra} />
          </div>

          <footer>
            <p>Contact: milesjkang@gmail.com</p>
            <p><a className="link" href="https://github.com/kilometerskang/me">
            Click here for my code for this website.</a></p>
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
