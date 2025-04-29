import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../fireabase';
// import { signInWithEmailAndPassword } from 'firebase/auth/cordova';

const AuthProvider = ({children}) => {
    const[user,setUser]=useState(null)

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
const signOutUser=()=>{
    return signOut(auth)
}

    // onAuthStateChanged(auth,(currentUser)=>{
    //     if(currentUser){
    //         console.log('has user',currentUser);
            
    //     }
    //     else{
    //         console.log('current user',currentUser);
            
    //     }
    // })

    useEffect(()=>{
        const unSubs=onAuthStateChanged(auth,currentUser =>{
            console.log('abcd',currentUser);
            setUser(currentUser)
            
        })
        return()=>{
            unSubs()
        }
    },[])
const userInfo={
    // email:'kamal99@gmail.com'
    user,
    createUser,
    signInUser,
    signOutUser
  }
//   console.log(userInfo.email);
    return (
        <div>
            <AuthContext value={userInfo}>{children}</AuthContext>
        </div>
    );
};

export default AuthProvider;