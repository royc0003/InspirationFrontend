import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Friendstagram</Link>
        </h1>
        {/* Passes down props from main to the first child */}
        {React.cloneElement(this.props.children, this.props)};
      </div>
    )
  }
});

export default Main;
