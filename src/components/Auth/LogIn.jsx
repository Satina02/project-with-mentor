import React from 'react';
import { useAuth } from '../../contexts/authContext';
import "./LogIn.css"

const LogIn = () => {
    const {
        email,  
        handleLogIn, 
        setEmail, 
        password, 
        setPassword, 
        handleSignUp, 
        emailError, 
        passwordError, 
        hasAccount, 
        setHasAccount} = useAuth();
    return (
        <>
            <section className="login">
                <div className="login-container">
                    <label className="auth-label">Email</label>
                    <input className="autg-input" 
                           type="text" autoFocus 
                           required value={email} 
                           onChange={(e) => setEmail(e.target.value)} 
                    />
                    <p className="error-msg">{emailError}</p>

                    <label className="auth-label">Password</label>

                    <input className="autg-input" 
                           type="password" autoFocus 
                           required value={password} 
                           onChange={(e) => setPassword(e.target.value)} 
                    />
                    <p className="error-msg">{passwordError}</p>


                    <div className="btn-container">
                        {hasAccount ? (
                            <>
                                <button className="auth-btn" onClick={handleLogIn}
                                     >Sign In
                                </button>
                                <p className="auth-text">Don't have an account? 
                                    <span className="auth-span" onClick={()=> setHasAccount(!hasAccount)}>
                                        Sign Up
                                    </span> 
                                </p>
                            </>
                        ): (
                            <>
                            <button className="auth-btn" onClick={handleSignUp}>Sign Up</button>
                            <p className="auth-text">Have an account? 
                                <span className="auth-span" onClick={()=> setHasAccount(!hasAccount)}>
                                  Sign In
                                </span> 
                            </p>
                            </>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default LogIn;