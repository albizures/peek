const React = require('react');

const obj = {};

obj.displayName = 'Body';

obj.render = function () {
  return <div className="container-fluid">
    <div className="row">
      <div className="col-md-2">
        <ul className="nav nav-pills nav-stacked">
          <li role="presentation" className="active"><a href="#">Home</a></li>
          <li role="presentation"><a href="#">Profile</a></li>
          <li role="presentation"><a href="#">Messages</a></li>
        </ul>
      </div>
      <div className="col-md-10">.col-xs-12 .col-md-8</div>
    </div>
  </div>;
};

export default React.createClass(obj);
