
import React from 'react';
import { Link } from 'react-router-dom';

//Import CSS
import '../sass/components/_Header.scss';

// Header Component
export default class Header extends React.Component{
  render() {
    return (
      <div>
        <h1>
          <Link className="friends" to="/"><span className="friends-start">F<span className="friends-red">.</span>R<span className="friends-blue">.</span>I<span className="friends-yellow">.</span>E<span className="friends-red">.</span>N<span className="friends-yellow">.</span>D<span className="friends-blue">.</span>S</span><span className="friends-end">tagram</span></Link>
        </h1>
        {/* Passes down props from main to the first child */}
        {/* {React.cloneElement(this.props.children, this.props)}; */}
      </div>
    )
  }
}

