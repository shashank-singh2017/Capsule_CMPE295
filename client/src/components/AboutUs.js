import React, { Component } from 'react';
import '../stylesheets/about-us.css';

class AboutUs extends Component {
  render() {
    return (
      <div className="container-fluid" style={{height: 300, backgroundColor: '#fbf1fb'}}>
            <div className="row box-aboutus">

                <div className="col-sm-8 leftbox">
                    <div style={{border: '1px solid',height: '86%', padding: 20,backgroundColor: '#f1eaee'}}>
                        <h2 style={{textAlign: 'left'}}>
                            About Us
                        </h2>
                        <p style={{textAlign: 'left'}}>
                            This is an application which is developed with blockchain.
                        </p>
                    </div>
                </div>

                <div className="col-sm-4 rightbox">
                    <div className="image-box">
                    </div>
                </div>

            </div>
      </div>
    );
  }
}

export default AboutUs;