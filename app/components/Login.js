import React, { Component } from 'react';
import Card from './Card';

class Login extends Component {
  state = {
    username: '',
    password: ''
  };

  onSubmit = ev => {
    ev.preventDefault();
  };

  render() {
    const { username, password } = this.state;

    return (
      <div className="login">
        <Card>
          <div className="content">
            <form onSubmit={this.onSubmit}>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={ev => this.setState({ username: ev.target.value })} />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={ev => this.setState({ password: ev.target.value })} />
              <div className="btn-container">
                <button type="submit">LOGIN</button>
              </div>
            </form>
          </div>
        </Card>
      </div>
    );
  }
}

export default Login;
