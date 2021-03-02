import React, { useState } from 'react'
import { Link } from '@reach/router'
import { connect } from 'react-redux'

export const NavbarTemplate = ({ start, end }) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">

                    <Link className="navbar-item" to="/">
                        TO4DO
                    </Link>
                    <Link className='navbar-item' to="/lists">Lists</Link>
                    <a role="button" onClick={ () => setIsOpen(!isOpen) } className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>

                </div>


                <div id="navbarBasicExample" className={ `navbar-menu ${ isOpen ? 'is-active': ''}` }>
                   

                    <div className="navbar-start">
                        {start}
                    </div>

                    <div className="navbar-end">                
                        {end}
                    </div>

                </div>
        </nav>

    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarTemplate)
