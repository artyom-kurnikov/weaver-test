import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';
import './app.global.css';

const renderTo = document.getElementById('root');

render(
  <AppContainer>
    <App />
  </AppContainer>,
  renderTo
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextRoot = require('./App');

    render(
      <AppContainer>
        <NextRoot />
      </AppContainer>,
      renderTo
    );
  });
}
