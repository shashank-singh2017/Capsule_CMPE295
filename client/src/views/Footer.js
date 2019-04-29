import React, { Component } from 'react';
import '../stylesheets/footer.css';


class Footer extends Component {
  render() {
    return (
      <div className="container-fluid box-footer">
            <div className="row">
                <div className="col-sm-6" style={{textAlign: 'left',paddingLeft: '5%', paddingTop: '1%'}}>
                    @copyright capsuleApp 2018
                </div>
            </div>
      </div>
    );
  }
}

export default Footer;
