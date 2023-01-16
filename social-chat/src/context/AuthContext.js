import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

//==============================================================
const AuthContext = React.createContext();

//==============================================================
export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {
// our states
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    
    const navigate = useNavigate();

// effects
    useEffect(
      () => {
        auth.onAuthStateChanged((user) => {
          setUser(user);
          setLoading(false);
          if(user) navigate("chats");
        });
      },
      // whenever we navigate or whenever we add user
      [user, navigate]
    );
    
    // when you use context, you need to have one value object
    const value = { user };



    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
    

};
