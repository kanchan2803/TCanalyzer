import React, { createContext, useState, useEffect, useContext } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // will hold {name, leetcodeId, codeforcesId}

  useEffect(() => {
    // Load user from localStorage on initial load
    const storedUser = localStorage.getItem("user");
    if(storedUser){
      setUser(JSON.parse(storedUser));
    }
    
  }, []);

  const login = (data) => {
    // Save in localStorage
    console.log("AuthContext.login called with:", data);
    const loggedInUser = data.user;
    //only store token and user object instead of individual fields
    localStorage.setItem("token", data.token);
    localStorage.setItem("user",JSON.stringify(data.user));

    setUser(loggedInUser);
    console.log("current user logged in :",loggedInUser);
  };

  const logout = () => {
    console.log("Logging out");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  const updateUser = (updatedUserData) => {
    setUser(updatedUserData);
    localStorage.setItem("user", JSON.stringify(updatedUserData));
  };

  const isLoggedIn = !!user;

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout , updateUser}}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to easily use the context
export const useAuth = () => {
    return useContext(AuthContext);
}
