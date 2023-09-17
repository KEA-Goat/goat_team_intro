import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './Nav.css'

const Nav = () => {

    return (
        <>

        <nav>
            <div className="navbar">
                <Link className="navbarMenu" to="/"> Home </Link>
                <Link className="navbarMenu" to="/vision"> Vision </Link>
                <Link className="navbarMenu" to="/custom"> Custom </Link>
            </div>
        </nav>

        <Outlet/>
        </>

    );
}

export default Nav;