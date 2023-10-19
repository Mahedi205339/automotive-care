import { useState } from "react";
import { createContext } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"

import { useEffect } from "react";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)

    const [user, setUser] = useState(null)
    
    const auth = getAuth(app)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleProvider = new GoogleAuthProvider()

    const googleLogin = () => {
        setLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                result.user
            })
            .catch(error => console.log(error.message))
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        });
        return () => { unsubscribe() }


    }, [auth])


    const authInformation = {
        user,
        createUser,
        logOut,
        signIn,
        loading,
        googleLogin,

    }

    return (
        <AuthContext.Provider value={authInformation}>
            {children}
        </AuthContext.Provider>
    );
};


AuthProvider.propTypes = {
    children :PropTypes.object
  };

export default AuthProvider;