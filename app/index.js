import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './Root';
import './app.global.scss';

const renderTo = document.getElementById('root');

render(
  <AppContainer>
    <Root />
  </AppContainer>,
  renderTo
);

if (module.hot) {
  module.hot.accept('./Root', () => {
    const NextRoot = require('./Root');

    render(
      <AppContainer>
        <NextRoot />
      </AppContainer>,
      renderTo
    );
  });
}
