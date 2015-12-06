var React = require('react');

var Repos = React.createClass({
  render:function(){
    return(
      <div>
        Repos <br />
        Username: {this.props.username} <br />
        Bio: {this.props.bio}
      </div>
    );
  }
});

module.exports=Repos;
