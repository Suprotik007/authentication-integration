import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div>
            
            <div className="hero bg-base-200 min-h-screen">
 
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className='text-4xl text-amber-300'>Login</h1>
      <div className="card-body">
        <form className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" name='email' placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" name='password' placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <p>New here? <Link className='text-amber-300 border-b-1 ' to='/reg'>Register</Link></p>
      </div>
    </div>
  </div>
</div> 
    
    );
};

export default Login;