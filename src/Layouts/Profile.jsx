import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';

const Profile = () => {
    const {user}=use(AuthContext)
    return (
        <div className='max-w-sm mx-auto'>
            <h1>profile</h1>
            <p>{user.email}</p>
        </div>
    );
};

export default Profile;