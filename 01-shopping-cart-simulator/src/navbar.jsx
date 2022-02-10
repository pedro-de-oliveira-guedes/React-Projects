import React, { Component } from 'react';

class NavBar extends Component {
    render() { 
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-md">
                    <a className="navbar-brand" href="#">
                        Navbar
                    </a>
                </div>
            </nav>
        );
    }
}
 
export default NavBar;