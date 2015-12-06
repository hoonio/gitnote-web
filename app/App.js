var React = require('react');
var Router = require('react-router');
var routes = require('./config/routes');

// depricated in react-routes@1.0
Router.run(routes, function(Root){
  React.render(<Root />, document.getElementById('app'));
});

// React.render(<Router>{routes}</Router>, document.getElementById('app'));

// module.exports = (
//   <Router path="/" component={Main}>
//   <IndexRoute component={Home} />
//   </Router>
// )
