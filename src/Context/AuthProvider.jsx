import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, reload, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase.init';
import axios from 'axios';


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const LogOut = () => {
        setLoading(true)
        return signOut(auth);
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
            console.log(currentUser)
            if (currentUser) {
                await reload(currentUser);
            }
            if(currentUser?.email){
                const userData={email: currentUser?.email};
                axios.post('https://edu-web-server-brown.vercel.app/jwt',userData).then(res=>{
                    console.log('the jwt token',res.data.token)
                    const token=res.data.token;
                    localStorage.setItem('token',token)
                }).catch(error=>{
                    console.log(error)
                })
            }
            setUser(currentUser)
            setLoading(false)
        })
        return () => { unSubscribe() }
    }, [])



    const updateUserProfile = async(profile) => {
        const currentUser=auth.currentUser
        await updateProfile(currentUser, profile);
        await reload(currentUser);
        setUser(auth.currentUser)


    }



    const provider = new GoogleAuthProvider();



    const signInGoogle = () => {
        setLoading(true);
        
        return signInWithPopup(auth, provider)




    }













    const userInfo = {
        createUser,
        signInUser,
        LogOut,
        updateUserProfile,
        user,
        loading,
        signInGoogle
    }
    return (

        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>

    );
};

export default AuthProvider;