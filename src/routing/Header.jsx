// import React from "react";

import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <nav className='navbarcontainer'>
            <aside className="leftaside">
                    <h1>LOGO</h1>
            </aside>
            <aside>
                <ul>
                    <NavLink to="/"><li>Home</li></NavLink>
                    <NavLink to="/contact"><li>Contact</li></NavLink>
                    <NavLink to="/about"><li>About</li></NavLink>
                </ul>
            </aside>
        </nav>
    </>
  )
}

export default Header
