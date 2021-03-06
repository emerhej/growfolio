import React from 'react';
import { Link, IndexLink } from 'react-router';

class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
              <div className="navbar-header">
                <IndexLink to="/">Home</IndexLink>
              </div>
            </nav>
        );
    }
}

export default NavBar;