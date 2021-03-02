import React from 'react'
import {Link} from '@reach/router'
import NavbarTemplate from './navbar-template'

export const NavbarPublic = () => {
    return (
       <NavbarTemplate end={                 
       
       <div className="navbar-item">
       
        <div className="buttons">
            
                <Link className="button is-primary" to="/register">
                    Sign up
                </Link>

                <Link className="button is-light" to="/login">
                    Log in
                </Link>
                
            </div>

        </div> 
   }></NavbarTemplate>
    )
}

export default NavbarPublic
