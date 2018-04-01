import React, { Component } from 'react';
import Card from './Card';
import { connect } from 'react-redux';
import { register } from '../store/actions/auth';

class Register extends Component {
  state = {
    username: '',
    email: '',
    password: ''
  };

  onSubmit = ev => {
    ev.preventDefault();

    this.props.register(this.state)
      .then(() =>
        this.props.history.push('/dashboard')
      )
      .catch(err => alert(err.message || 'Something went wrong'));
  };

  onChangeFor = fieldName => ev =>
    this.setState({ [fieldName]: ev.target.value });

  render() {
    const { username, email, password } = this.state;
    const { isRegistering } = this.props;

    return (
      <div className="register">
        <Card>
          <div className="content">
            <form onSubmit={this.onSubmit}>
              <input
                type="text"
                placeholder="email"
                value={email}
                onChange={this.onChangeFor('email')} />
              <input
                type="text"
                placeholder="username"
                value={username}
                onChange={this.onChangeFor('username')} />
              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={this.onChangeFor('password')} />
              <div className="btn-container">
                <button
                  className={isRegistering ? 'disabled' : ''}
                  disabled={isRegistering}
                  type="submit">
                  REGISTER
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
  state => ({ isRegistering: state.me.isRegistering }),
  dispatch => ({ register: userData => dispatch(register(userData)) })
);

export default enhance(Register);
