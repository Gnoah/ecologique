import React, { Component } from "react";


class Profil extends Component {

  render() {

    return (
        <div className="row">
            <div className="col-md-2">
            </div>
            <div className="col-md-10">
            <div class="main-content">
                {/* <!-- Page content --> */}
                <div>
                <div class="row">
                    <div>
                        <div class="card bg-secondary shadow">
                            <div class="card-header bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-8">
                                    <h3 class="mb-0">My account</h3>
                                </div>
                                <div class="col-4 text-right">
                                    <a href="#!" class="btn btn-sm btn-primary">Settings</a>
                                </div>
                            </div>
                            </div>

                        </div>
                    <div class="card card-profile shadow">
                        <div class="row justify-content-center">
                        <div class="col-lg-3 order-lg-2">
                            <div class="card-profile-image">
                            <a href="#">
                                <img src="img/noah.jpg" class="rounded-circle"/>
                            </a>
                            </div>
                        </div>
                        <br/>
                        </div>
                        <div class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                        <div class="d-flex justify-content-between">
                            <a href="#" class="btn btn-sm btn-info mr-4">Connect</a>
                            <a href="#" class="btn btn-sm btn-default float-right">Message</a>
                        </div>
                        </div>
                        <div class="card-body pt-0 pt-md-4">
                        <div class="row">
                            <div class="col">
                            <div class="card-profile-stats d-flex justify-content-center mt-md-5">
                                <div>
                                <span class="heading">22</span>
                                <span class="description">Friends</span>
                                </div>
                                <div>
                                <span class="heading">10</span>
                                <span class="description">Photos</span>
                                </div>
                                <div>
                                <span class="heading">89</span>
                                <span class="description">Comments</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="text-center">
                            <h3>
                            Geoffroy Tolojanahary<span class="font-weight-light">, 24</span>
                            </h3>
                            <div class="h5 font-weight-300">
                                <i class="ni location_pin mr-2"></i>Geoffroy, Malagasy
                            </div>
                            <div class="h5 mt-4">
                                <i class="ni business_briefcase-24 mr-2"></i>Solution Manager - Creative Tim Officer
                            </div>
                            <div>
                                <i class="ni education_hat mr-2"></i>Student of Simplon Madagascar
                            </div>
                            <hr class="my-4" />
                            <p>Gasy Ecocitizen —  a protected environment a guarantee of survival — writes, performs and records all of the environment.</p>
                            <a href="#">Show more</a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="col-xl-8 order-xl-1">
                        
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

          
          
    );
  }
}

export default Profil;