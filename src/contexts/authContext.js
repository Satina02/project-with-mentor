import { createContext, useState, useContext, useEffect } from "react";
import fire from "../fire";

export const authContext = createContext();

export const useAuth = () => {
    return useContext(authContext)
}

const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [hasAccount, setHasAccount] = useState("");

    const clearInputs=()=>{
        setEmail('');
        setPassword('');
    }

    const clearErrors=()=>{
        setPasswordError('');
        setEmailError('');
    }

    const handleSignUp =()=> {
        clearErrors();
        fire.auth().createUserWithEmailAndPassword(email, password).catch((err)=>{
            switch(err.code){
                case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;

                case "auth/weak-password":
                    setPasswordError(err.message);
                    break;
            }
        })
    };

    const handleLogIn =()=> {
        clearErrors();
        fire.
           auth().
           signInWithEmailAndPassword(email, password).catch((err)=>{
            switch(err.code){
                    case "auth/invalid-email":
                        case "auth/user-disabled":
                            case "auth/user-not-found":
                        setEmailError(err.message);
                        break;

                case "auth/wrong-password":
                    setPasswordError(err.message);
                    break;
            }
        })
    };

    const handleLogOut =()=>{
        fire.auth().signOut();
    };

    const authListener=()=>{
        fire.auth().onAuthStateChanged((user) => {
            if(user){
                clearInputs()
                setUser(user)
            }else{
                setUser('')
            }
        })
    }

    useEffect(() => {
        authListener()
    }, [])



    const values={
        email, 
        user, 
        handleLogOut, 
        handleLogIn, 
        setEmail, 
        password, 
        setPassword, 
        handleSignUp, 
        emailError, 
        passwordError, 
        setHasAccount, 
        hasAccount,
    }

    return <authContext.Provider value={values}>
        {children}
    </authContext.Provider>

}; 

export default AuthContextProvider; 



