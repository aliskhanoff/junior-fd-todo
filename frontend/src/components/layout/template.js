import React from 'react'

export const Template = ({ children, className, navbar = "", footer = "", ...rest }) => {
    
    
    return (
        <div className="columns">
            <div className="column is-1"></div>
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
            <div className="column is-1"></div>
            
        </div>

    )
}

export default Template
