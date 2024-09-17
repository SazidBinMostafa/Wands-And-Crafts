import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../Firebase/firebase.config";

export const AuthContext = createContext(null)

function AuthProvider({children}){

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider;

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user);
                setLoading(false);
            }
            else{
                setUser(null);
                setLoading(false)
            }
        } )

        return () => unsubscribe();
    },[]);

    const signUp = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    const logOut= () =>{
        return signOut(auth)
    }

    if(loading){
        return <div className="flex justify-center items-center h-screen">
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }

    const authInfo = {
       user,
       signUp,
       login,
       googleSignIn,
       loading,
       logOut
    }

    return<AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
}

export default AuthProvider;