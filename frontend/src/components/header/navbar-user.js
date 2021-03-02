import { Link } from '@reach/router'
import React from 'react'
import NavbarTemplate from './navbar-template'

export const NavbarUser = () => {
    return (
        <NavbarTemplate end={          
            <div className="buttons">           
                <Link className="button is-light" to="/logout">
                    Log out
                </Link>
            </div>
            } />
    )
}

export default NavbarUser
