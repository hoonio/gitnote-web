import React from 'react';
import Router from 'react-router';
import routes from './config/routes';

// depricated in react-routes@1.0
Router.run(routes, (Root, state) => {
  React.render(<Root {...state} />, document.getElementById('app'));
});
