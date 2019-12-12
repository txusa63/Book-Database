import React from "react"
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto"> 
                    <li>
                        <Link to="/" className="nav-link">Homepage</Link>
                    </li>
                    <li>
                        <Link to="/addbooks" className="nav-link">Add Books</Link> 
                    </li>
                    <li>
                        <Link to="/ownedbooks" className="nav-link">Owned Books</Link>
                    </li>
                    <li>
                        <Link to="/wantedbooks" className="nav-link">Wanted Books</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;