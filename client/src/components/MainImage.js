import React, { Component } from 'react';
import '../stylesheets/main-image.css';

import HeaderTransparent from './HeaderTransparent';

class MainImage extends Component {
  render() {
    return (
      <div className="container-fluid main-image">
            <HeaderTransparent />
      </div>
    );
  }
}

export default MainImage;