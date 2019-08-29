import React, { Component } from "react";
import {Animation,MDBContainer  } from 'mdbreact';
import Header from '../../Accueil';
import Footer from '../Footer/Footer';
import './Resolve.css';

class Resolve extends Component {
  render() {
    return (
      <div id="fond0">
         <Header />
            <MDBContainer fluid>
              <div className="solution">
                  <Animation type="slideInDown">
                  <h3>Let's protect our environment. </h3>
                  </Animation>
                  <Animation type="slideInUp">
                  <h3>Contact us and propose your solution.</h3>
                  </Animation>
              </div>
            </MDBContainer>
        <div id="#foot">
          <Footer /> 
        </div>
      </div>
    );
  }
}

export default Resolve;