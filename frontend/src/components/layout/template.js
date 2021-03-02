import React from 'react'
import { Navbar } from '../header'

export const Template = ({ children, className, navbar = <Navbar />, footer = "", ...rest }) => {
    
    
    return (
        <div className="page__container">
            <div className="columns">
            <div className="column is-1 is-hidden-mobile"></div>
            <div className="column is-10">
                <div className={ `layout__container` } {...rest} >

                    <div className="layout__header">
                        {navbar}
                    </div>

                    <div className="layout__body">
                        {children}
                    </div>
                    
                    <div className="layout__footer">

                    </div>

                </div>
            </div>
            <div className="column is-1 is-hidden-mobile"></div>
            
        </div>
        </div>
    )
}

export default Template
