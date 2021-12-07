import React from 'react';
import { useAuth } from '../../contexts/authContext';
import Home from '../Home/Home';
import LogIn from './LogIn';

const Auth = () => {
    const {user} = useAuth()
    return (
        <div>
            {user ? <Home /> : <LogIn/>}
        </div>
    );
};

export default Auth;