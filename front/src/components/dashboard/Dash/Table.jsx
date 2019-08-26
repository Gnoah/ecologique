import React, { Component } from "react";


class Table extends Component {

  render() {

    return (
        <div className="row">
            <div>
                <div class="container-fluid mt--7">
                <div class="row mt-5">
                    <div class="col">
                    <div class="card bg-default shadow">
                        <div class="card-header bg-transparent border-0">
                            <h3 class="text-white mb-0">Card tables</h3>
                        </div>
                        <div class="table-responsive">
                        <table class="table align-items-center table-dark table-flush">
                            <thead class="thead-dark">
                            <tr>
                                <th scope="col">Project</th>
                                <th scope="col">Budget</th>
                                <th scope="col">Status</th>
                                <th scope="col">Users</th>
                                <th scope="col">Completion</th>
                                <th scope="col"></th>
                            </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Table;