import React, { Component } from 'react';
import Card from './Card';
import { login } from '../store/actions/auth';
import { connect } from "react-redux";

class Login extends Component {
  state = {
    username: '',
    password: ''
  };

  onSubmit = ev => {
    ev.preventDefault();

    this.props.login(this.state)
      .then(() =>
        this.props.history.push('/dashboard')
      )
      .catch(err => alert(
        err.code
          ? err.message
          : 'Something went wrong')
      );
  };

  render() {
    const { username, password } = this.state;
    const { isLoggingIn } = this.props;

    return (
      <div className="login">
        <Card>
          <div className="content">
            <form onSubmit={this.onSubmit}>
              <input
                type="text"
                placeholder="username"
                value={username}
                onChange={ev => this.setState({ username: ev.target.value })} />
              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={ev => this.setState({ password: ev.target.value })} />
              <div className="btn-container">
                <button
                  className={isLoggingIn ? 'disabled' : ''}
                  type="submit"
                  disabled={isLoggingIn}>
                  LOGIN
                </button>
              </div>
            </form>
          </div>
        </Card>
      </div>
    );
  }
}

const enhance = connect(
  state => ({ isLoggingIn: state.me.isLoggingIn}),
  dispatch => ({ login: userData => dispatch(login(userData)) })
);

export default enhance(Login);
