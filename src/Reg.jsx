import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { use } from 'react';
import { Link } from 'react-router';
import { auth } from './fireabase';
import { AuthContext } from './Context/AuthContext';

const Reg = () => {
  const {createUser}=use(AuthContext)
  // console.log(userInfo);
  
    const handleReg=e=>{
        e.preventDefault()
        const name=e.target.name.value
        const email=e.target.email.value
        const password=e.target.password.value
        console.log(name,email,password);

        createUser(email,password)
        .then(result=>{
          console.log(result);
          
        })
        .catch(error=>{
          console.log(error);
          
        })

        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{console.log(result)
        })
        .catch((error)=>{
            console.log(error);
            
        })
        
    }
    return (
        <div>
             <div className="hero bg-base-200 min-h-screen">
 
 <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
     <h1 className='text-4xl text-amber-300'>Register</h1>
   <div className="card-body">
     <form onSubmit={handleReg} className="fieldset">
       <label className="label">Name</label>
       <input type="text" className="input" name='name' placeholder="Name" />
       <label className="label">Email</label>
       <input type="email" className="input" name='email' placeholder="Email" />
       <label className="label">Password</label>
       <input type="password" className="input" name='password' placeholder="Password" />
       
       <button className="btn btn-neutral mt-4">Register</button>
     </form>
     <p>Already have an account? <Link className='text-amber-300 border-b-1 ' to='/login'>Login</Link></p>
   </div>
 </div>
</div> 
        </div>
    );
};

export default Reg;