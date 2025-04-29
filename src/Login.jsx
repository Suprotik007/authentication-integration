import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from './Context/AuthContext';

const Login = () => {

  const {signInUser}=use(AuthContext)
const Navigate=useNavigate()

  const handleLogin=e=>{
    e.preventDefault()
    const email=e.target.email.value
    const password=e.target.password.value
    console.log(email,password);
   
    signInUser(email,password)
    .then(result=>{
      console.log(result.user);
      Navigate('/')
      
    })
    .catch(error=>{
      console.log(error);
      
    })

    
    
  }
    return (
        <div>
            
            <div className="hero bg-base-200 min-h-screen">
 
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className='text-4xl text-amber-300'>Login</h1>
      <div className="card-body">
        <form onSubmit={handleLogin} className="fieldset">
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