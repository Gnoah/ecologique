import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import { MDBContainer } from 'mdbreact';
import Home from './component/Home/Home';
import Impact from './component/Impact/Impact'
import Risk from './component/Risk/Risk'
import Resolve from './component/Resolve/Resolve'
import Social from './component/Social/Social'
import Footer from './component/Footer/Footer'
import Login from '../auth/Login'
import { MDBContainer, MDBNavbar,MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse } from "mdbreact";

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    modal5: false, 
  }

  toggleCollapse = collapseID => () =>
  this.setState(prevState => ({
    collapseID: prevState.collapseID !== collapseID ? collapseID : ""
  }));
  toggle = nr => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }

  render() {
    return (
        <Router>
          <div id="fond">
            <MDBContainer fluid>
                <header >
                  <div className="slogo">
                   {/* <p className="logo">Gasy Ecocitizen</p> */}
                    <p className="slogan">Take care of our environment</p>                   
                    <img src="img/logo.png" width="120px"/>
                  </div>
                  <MDBNavbar dark expand="md" style={{ marginTop: "1px" }} id="zetina">
                    <MDBNavbarBrand>
                      <img className=""  src=""  alt = "transparent" height="60px"/>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
                      <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
                        <MDBNavbarNav left>
                          <li class="nav-item">
                            <Link to="/"><span id="couleur" >Home</span></Link> <span class="sr-only">(current)</span>
                          </li>
                          <li class="nav-item">
                            <Link to="/Impact"><span id="couleur" >Impact</span></Link> <span class="sr-only">(current)</span>
                          </li>
                          <li class="nav-item">
                            <Link to="/Risk"><span id="couleur" >Risk</span></Link> <span class="sr-only">(current)</span>
                          </li>
                          <li class="nav-item">
                            <Link to="/Resolve"><span id="couleur" >Resolve</span></Link> <span class="sr-only">(current)</span>
                          </li>
                        </MDBNavbarNav>
                        <MDBNavbarNav right>
                          <li class="nav-item" left>
                            <Link to="/login"><span id="couleur" >Sign in</span></Link> <span class="sr-only">(current)</span>
                          </li>
                        </MDBNavbarNav>
                      </MDBCollapse>
                  </MDBNavbar>
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
                  <Route path="/login" component={Login} />
                </div>
                
                <div id="#foot">
                  <Footer /> 
                </div>
              </MDBContainer> 
            </div>  
        </Router>
    );
  }
}

export default App;