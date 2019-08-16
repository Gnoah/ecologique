import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { MDBContainer } from 'mdbreact';
import Home from './component/Home/Home';
import Impact from './component/Impact/Impact'
import Risk from './component/Risk/Risk'
import Resolve from './component/Resolve/Resolve'
import Social from './component/Social/Social'
import Footer from './component/Footer/Footer'

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
        <Router>
          <MDBContainer fluid>
                <header >
                  <div className="slogo">
                   {/* <p className="logo">Gasy Ecocitizen</p> */}
                    <p className="slogan">Take care of our environment</p>                   
                    <img src="img/logo.png" width="120px"/>
                  </div>
                    <nav id="navbar" class="navbar navbar-expand-lg navbar-light bg-light menu" scrolling>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button> 

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                          <Link to="/Home"><span id="couleur" >Home</span></Link> <span class="sr-only">(current)</span>
                        </li>
                        <li class="nav-item active">
                          <Link to="/Impact"><span id="couleur" >Impact</span></Link> <span class="sr-only">(current)</span>
                        </li>
                        <li class="nav-item active">
                          <Link to="/Risk"><span id="couleur" >Risk</span></Link> <span class="sr-only">(current)</span>
                        </li>
                        <li class="nav-item active">
                          <Link to="/Resolve"><span id="couleur" >Resolve</span></Link> <span class="sr-only">(current)</span>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </header>
                <div className="reseau">
                  <Social /> 
                </div>
                <div className="content">
                  <Route path="/" exact component={Home} />
                  <Route path="/Home" component={Home} />
                  <Route path="/Impact" component={Impact} />
                  <Route path="/Risk" component={Risk} />
                  <Route path="/Resolve" component={Resolve} />
                </div>
                
                <div id="#foot">
                  <Footer /> 
                </div>
              
            </MDBContainer>  
        </Router>
    );
  }
}

export default App;