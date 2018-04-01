import React from 'react';
import { connect } from 'react-redux';
import { resetMe } from "../store/actions/auth";

const Dashboard = props => {
  const { me, resetMe } = props;

  const onLogout = () => {
    localStorage.removeItem('authToken');
    resetMe();
    props.history.push('/');
  };

  return (
    <div className="dashboard">
      <div className="main-info">
        <h1>Welcome, { me.username }</h1>
        <div>Your ID is {me.userId}</div>
        { me.email && (<div>Your email is {me.email}</div>) }
        <button onClick={onLogout}>Logout</button>
      </div>
    </div>
  )
};

const enhance = connect(
  state => ({ me: state.me }),
  dispatch => ({ resetMe: () => dispatch(resetMe()) })
);

export default enhance(Dashboard);
