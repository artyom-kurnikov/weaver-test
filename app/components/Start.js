import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from "../store/actions/auth";

class Start extends Component {
  componentDidMount() {
    const token = localStorage.getItem('authToken');

    if (token) this.props.login(token)
      .then(() =>
        this.props.history.push('/dashboard')
      )
  }

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

const enhance = connect(
  (_, ownProps) => ownProps,
  dispatch => ({ login: token => dispatch(login(token)) })
);

export default enhance(Start);
