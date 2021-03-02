import { NavbarPublic } from './navbar-public'
import { NavbarUser }   from './navbar-user'

import React from 'react'
import { connect } from 'react-redux'

export const Navbar = ({ isAuthenticated = false  }) => {

    if(isAuthenticated) {
        return (<NavbarUser />)
    }

    return (
        <NavbarPublic />
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
