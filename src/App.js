import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Device from './components/Device';
import PostsForm from './components/PostsForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
// import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './routes/Home';
import About from './routes/About';
import Postss from './routes/Postss';
import NoMatch from './routes/NoMatch';

// import Highcharts from './components/Highcharts';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {

    return (
      <div >

        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about/:username" component={About} />
              <Route path="/posts" component={Postss} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>

        <div className='container' style={{ maxWidth: 1200, padding: '5px 0' }}>

          {/* renderby  css */}
          <div className="App">
            <header className="App-header">

              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">iz-seacs Data</h1>
            </header>
            {/* <Highcharts /> */}




            <PostsForm />
            <Device />
            {/* <Posts /> */}
          </div>
        </div>
      </div>
    );
  }

}

export default App;
