import React from 'react'
import { Template } from '../../components/layout'
import _useRequest from '../../hooks/useRequest'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form';


export const RegisterPage = ({  }) => {

    const request = _useRequest();
    const {  register, handleSubmit } = useForm();

    return (
        <Template>
            
            <div className="columns is-gapless">

                <div className="column is-5">

                    <div className="hero is-medium">
                    
                        <div className="hero-body">

                            <div className="container">
                                
                            <h1 className="title has-text-centered is-uppercase">Register</h1>

                            <form onSubmit={handleSubmit}>

                                <div className="title">
                                    
                                    <div class="control input__block ">
                                        <input placeholder='Write your name'         type="text" className="input" ref={ register } />
                                        <input placeholder='Write your last name'    type="text" className="input" ref={ register } />
                                    </div>
                                    

                                    <hr/>
                                   
                                    <div class="control input__block ">
                                        <input placeholder='Input your email'       type="email"    className="input" ref={ register } />
                                        <input placeholder='Input your password'    type="password" className="input" ref={ register } />
                                        <input placeholder='Input your password'    type="password" className="input" ref={ register } />
                                    </div>

                                </div>

                                
                                <input type="submit" className="button is-fullwidth is-primary" value="Register" />
                            
                            </form>
                            </div>
                            
                        </div>

                    </div>

                </div>

                <div className="column is-7 is-hidden-mobile">

                    <div className="hero is-large is-dark">
                        
                        <div className="hero-body">

                            <p class="title">
                                Sync your todos
                            </p>

                            <p class="subtitle">
                                Login for open new possibilities
                            </p>

                        </div>

                    </div>

                </div>
            </div>

        </Template>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage)
