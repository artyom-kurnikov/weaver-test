import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ children }) => (
  <div className="card">
    <Link className="back-btn" to="/">Back</Link>
    {children}
  </div>
);

export default Card;
