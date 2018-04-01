import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Start extends Component {
  render() {
    return (
      <div className="start-page">
        <div>
          <h1>Weaver Test App</h1>
          <div className="links">
            <Link to="/login">Login</Link> or <Link to="/register">Register</Link>
          </div>
        </div>
      </div>
    );
  }
}
