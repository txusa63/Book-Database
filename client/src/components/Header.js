import React, { useState } from "react"
import {NavLink as RRNavLink} from "react-router-dom";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from "reactstrap";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color='secondary' light expand='md'>
                <NavbarBrand href='/'><img src="/openlibrary-logo.svg" alt='open library logo' width="200px" height="50px" /></NavbarBrand>
                <NavbarToggler onClick={toggleNavbar}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='mr-auto' navbar>
                        <NavItem>
                            <NavLink tag={RRNavLink} exact to='/'>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={RRNavLink} to='/favorites'>Favorites</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

// export default Navbar;
