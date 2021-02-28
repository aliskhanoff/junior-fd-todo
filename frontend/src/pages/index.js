import * as Admin from './admin'
import * as Authenticated from './authenticated'
import * as Public from './public'
import { Router } from '@reach/router'

import React from 'react'
import { connect } from 'react-redux'

const PublicRoutes = () => {

    return (
        <React.Fragment>
            <Public.IndexPage       path='/' />
            <Public.AboutPage       path='/about' />
            <Public.ContactsPage    path='/contacts' />
            <Public.LoginPage       path='/login' />
            <Public.RegisterPage    path='/register' />
            <Public.ForgotPage      path='/forgot' />
        </React.Fragment>
    )

}

export const ConfigRoutes = ({ isAuthenticated }) => {

    if(!isAuthenticated) {
        return (
            <Router>
                <Public.IndexPage       path='/' />
                <Public.AboutPage       path='/about' />
                <Public.ContactsPage    path='/contacts' />
                <Public.LoginPage       path='/login' />
                <Public.RegisterPage    path='/register' />
                <Public.ForgotPage      path='/forgot' />
            </Router>
        )
    }

    return (
        <Router>
            <PublicRoutes />
        </Router>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfigRoutes)
