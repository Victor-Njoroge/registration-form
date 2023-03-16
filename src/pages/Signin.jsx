import React from 'react'
import { Link } from 'react-router-dom'

function Signin() {
  return <React.Fragment>
    <div className="auth-header">
      <h1 className="auth-header-title">Log in</h1>
      <p className="auth-header-subtitle">Sign-in to your account</p>
    </div>

    <div className="auth-body">
        <form action="" className="auth-form-validation">
            <div className="input-field">
                <label htmlFor="Email" className="input-label">Email address</label>
                <input type="text" className='input-control' id='email' placeholder='example@gmail.com' autoComplete='off'required/>
            </div>
            <div className="input-field">
                <label htmlFor="password" className="input-label">Password</label>
                <input type="password" name='password' id='password' className='input-control' placeholder='Password' autoComplete='off' required/>
            </div>
            <div className="flex-end">
                <Link to={'/auth/forgot-password'} className='link-end'>Forgot password?</Link>
            </div>
          
            <button type='submit' className="btn-submit">Sign in</button>
        </form>
        <p className="text-center">
            New on our platform?{''}
            <Link to={'/auth/signup'} className='link-text-center'>Create account here</Link>
        </p>
    </div>
  </React.Fragment>
    
 
}

export default Signin