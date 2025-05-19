import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className="main-footer clearfix fixed-bottom">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <p>Copyright &copy; {new Date().getFullYear()} Aress Software </p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
