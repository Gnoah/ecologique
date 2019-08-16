import React, { Component } from "react";
import {Animation } from 'mdbreact';
import './Resolve.css';

class Resolve extends Component {
  render() {
    return (
        <div className="solution">
            <Animation type="slideInDown">
             <h3>Let's protect our environment. </h3>
             </Animation>
             <Animation type="slideInUp">
             <h3>Contact us and propose your solution.</h3>
             </Animation>
        </div>
        
    );
  }
}

export default Resolve;