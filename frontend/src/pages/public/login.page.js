import React from 'react'
import { Template } from '../../components/layout'
import _useRequest from '../../hooks/useRequest'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form';
import { Link } from '@reach/router';
import { _useCSRFtoken } from '../../hooks';


export const LoginPage = ({  }) => {

    const request = _useRequest();
    const {  register, handleSubmit, errors } = useForm();
    
    const onSubmit = (data) => {
        
    }


    return (
        <Template>
            
            <div className="columns is-gapless">

                <div className="column is-5">

                    <div className="hero is-medium">
                    
                        <div className="hero-body">

                            <div className="container">
                                
                            <h1 className="title has-text-centered">LOGIN</h1>

                                <form onSubmit={onSubmit(handleSubmit)}>

                                    <div className="title">
                                        
                                        <div class="control input__block">
                                            <input name="email"     ref={register({ required: true })}                  placeholder='Input your email'      type="email"    className="input" />
                                            <input name="password"  ref={register({ required: true, minLength: 6 })}    placeholder='Input your password'   type="password" className="input" />
                                        </div>

                                    </div>

                                    <div className="subtitle">
                                        
                                        <label htmlFor="rememberMe"> 
                                            <input type="checkbox" id="rememberMe" />
                                            &nbsp; Remember me
                                        </label>

                                    </div>

                                    <input type="submit" className="button is-fullwidth is-primary" value="Login" />

                                </form>

                                <br/>                        
                                <br/>                        
                                <br/>                        
                                <br/>                        

                                <div className="columns is-gapless">

                                    <div className="column has-text-centered">
                                        <Link to='/forgot'>Forget password?</Link>
                                    </div>
                                    
                                    <div className="column has-text-centered">
                                        <Link to='/register'>Don't have account?</Link>
                                    </div>

                                    { _useCSRFtoken() }

                                </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
