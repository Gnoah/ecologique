import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Atelier from './../atelier/atelier';
import Getatelier from './../atelier/getatelier';
import Chart from './Charts/index';
import Sidenav from './SideBar/index';
import Profil from './Dash/Profil';
//import { Link } from "react-router-dom";
//import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse } from "mdbreact";

import '@trendmicro/react-sidenav/dist/react-sidenav.css';
//import './assets/styles/base.scss';

class Dashboard extends Component {
  state = {
    modal5: false, 
  }

  get = () =>{
      return   document.getElementById('listecomponent').style.display = 'block'
  }
  //popops login fonction 
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
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };


  render() {
  
    const { user } = this.props.auth;

    return (
      <div className="container-fluid">
            {/* <MDBNavbar color="yelow" dark expand="md" style={{ marginTop: "1px" }} id="zetina2" className="fixed-top">
              <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
                <MDBNavbarBrand>
                    <img className=""  src="img/logo.png"  alt = "logo" height="60px"/>
                    <span id="good">GEC</span>
                </MDBNavbarBrand>
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
                  <MDBNavbarNav left>
                    <li class="nav-item">
                        <Link to="/"><span id="couleur" >Acceuil</span></Link> <span class="sr-only">(current)</span>
                      </li>
                      <li class="nav-item">
                        <Link to="/"><span id="couleur" >Actualiter</span></Link> <span class="sr-only">(current)</span>
                      </li>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                      <li class="nav-item">
                        <Link to="" onClick={this.onLogoutClick} className="nav-header"><span id="couleur" >Deconnexion</span></Link> <span class="sr-only">(current)</span>
                      </li>
                  </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar> */}
      <div className="row">
          <div className="col-md-2">
            <Sidenav/>
          </div>
          <div className="col-md-10">
            <Chart/>
            <Profil/>
          </div>

      </div>

            

            <div>
         
        </div>
        <center>
            <Atelier/>
        </center>

        <div className="row">
              <div className="col-md-2">

              </div>
              <div className="col-md-10">
              
                <Getatelier/>
              </div>
        </div>
          
          
        <footer className="page-footer" id="footerdash">
              <center>
                <span>© 2019 Copyright   <span id="spanfooter">TOLOJANAHARY H. Geoffroy de Noah</span></span>
              </center>
        </footer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
