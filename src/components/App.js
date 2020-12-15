import React, {useState} from 'react';
import { HashRouter, Route, Link, Redirect, NavLink } from 'react-router-dom';
import Home from './Home';
import Experience from './Experience'; 
import Resume from './Resume';
import Hobbies from './Hobbies';
import Ccle from './Ccle';
import TeachLa from './TeachLa';
import Angular from './Angular';
import RecordPlayer from './RecordPlayer';
import '../styles/nav.scss';

function App() {
  const [name, setName] = useState("Miles");
  const [prevName, setPrevName] = useState();

  const handleUnitsBtn = () =>  {
    const units = ["Meters", "Furlongs", "Microfortnights", "Watts", "Bytes",
      "Joules", "Newtons", "Amperes", "Kilograms", "Seconds", "Inches"]
    do {
      var x = Math.floor(Math.random() * 11);
    } while (units[x] === prevName || units[x] === name);
    setPrevName(name);
    setName(units[x]);
  };

  const handleResetBtn = () => {
    setName("Miles");
  }

  return (
    <HashRouter>
      <Route path="/" render={() => (
        <Redirect to="/home"/>
      )}/>
      
      <div className="dope-bg"></div>

      <div className="App">
        <div id="top-banner">
          <button onClick={handleUnitsBtn} className="units-btn">
            I'm Feeling Scientific
          </button>
          <button onClick={handleResetBtn} className="units-btn" id="reset-btn">
            Reset
          </button>
        </div>

        <div id="title">
          <h1><Link id="name-link" to="/home">{name} Kang</Link></h1>
        </div>
        <ul className="nav-bar">
          <li><NavLink className="nav-item" activeClassName="active" to="/home">Home</NavLink></li>
          <li><NavLink className="nav-item" activeClassName="active" to="/exp">Experience</NavLink></li>
          <li><NavLink className="nav-item" activeClassName="active" to="/resume">Resume</NavLink></li>
          <li><NavLink className="nav-item" activeClassName="active" to="/hobbies">Hobbies</NavLink></li>
        </ul>

        <div>
          <Route path="/home" component={Home} />
          <Route path="/exp" component={Experience} />
          <Route path="/resume" component={Resume} />
          <Route path="/hobbies" component={Hobbies} />
          <Route path="/ccle" component={Ccle} />
          <Route path="/acm" component={TeachLa} />
          <Route path="/angular" component={Angular} />
          <Route path="/player" component={RecordPlayer} />
        </div>

        <footer>
          <p className="p-txt-small">Contact: milesjk@g.ucla.com</p>
          <p className="p-txt-small"><a className="link" href="https://github.com/kilometerskang/me">
          Click here for my code for this website.</a></p>
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;
