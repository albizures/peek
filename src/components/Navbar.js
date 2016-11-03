const React = require('react');

const obj = {};

obj.displayName = 'NavBar';

obj.propTypes = {
  user: React.PropTypes.object.isRequired
};

obj.render = function () {
  return <nav className="navbar navbar-default navbar-fixed-top">
    <div className="container-fluid">
      <div className="navbar-header">
      </div>
      <a className="navbar-brand" href="#">Peek</a>
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="#">
              <img className='image-profile' alt='profile' src={this.props.user.photoURL}/>
              {this.props.user.displayName.split(' ')[0]}
              <span className="caret"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>;
};

export default React.createClass(obj);
