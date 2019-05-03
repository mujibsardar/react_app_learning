import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component{
    render() {
        return (
            <div>
                <h1>Welcome to Senior Enrichment</h1><br />


                <div class="row">
                  <div class="col-sm-6 col-md-6 col-lg-6">
                    <div class="thumbnail">
                      <img src="https://www.alaskapacific.edu/wp-content/uploads/2015/02/students-photo.jpg" alt="Female College Student"></img>
                      <div class="caption">
                        <h3>Students</h3>
                        <p>Meet the students</p>
                        <Link to="/students" class="btn btn-primary" role="button">Students</Link>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-6 col-md-6 col-lg-6">
                    <div class="thumbnail">
                      <img src="https://www.santarosa.edu/sites/www.santarosa.edu/files/Santa%20Rosa%20option%202.jpg" alt="image of typical campus"></img>
                      <div class="caption">
                        <h3>Campuses</h3>
                        <p>Campuses ...</p>
                        <Link to="/campuses" class="btn btn-primary" role="button">Campuses</Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row">

                </div>
            </div>
        )
    }
}
