import React from 'react';

const NavBar = ({ totalCounters }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-md">
                <a className="navbar-brand" href="#">
                    Navbar
                </a>
                <span className="badge badge-pill badge-secondary">
                    {totalCounters}
                </span>
            </div>
        </nav>
    );
};
 
export default NavBar;