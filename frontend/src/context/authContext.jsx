import React, { createContext, useState, useEffect } from "react";
import { getUserApi } from "../../api/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // will hold {name, leetcodeId, codeforcesId}
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Load from localStorage when app starts
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      setUser({
        _id: localStorage.getItem("_id"),
        name: localStorage.getItem("name"),
        email: localStorage.getItem("email"),
        leetcodeId: localStorage.getItem("leetcodeId") || "-",
        codeforcesId: localStorage.getItem("codeforcesId") || "-"
      });
    }
  }, []);

  const login = (data) => {
    // Save in localStorage
    console.log("AuthContext.login called with:", data);
    localStorage.setItem("token", data.token);
    localStorage.setItem("_id",data.user._id);
    localStorage.setItem("name", data.user.name);
    localStorage.setItem("email", data.user.email || "-");
    localStorage.setItem("leetcodeId", data.user.leetcodeId || "-");
    localStorage.setItem("codeforcesId", data.user.codeforcesId || "-");

    setIsLoggedIn(true);
    setUser({
      _id : data.user._id,
      name: data.user.name,
      email: data.user.email,
      leetcodeId: data.user.leetcodeId || "-",
      codeforcesId: data.user.codeforcesId || "-"
    });
    console.log("current user logged in :",data.user);
  };

  const logout = () => {
    console.log("Logging out");
    localStorage.clear();
    setIsLoggedIn(false);
    setUser(null);
  };

  const updateUser = (data) => {
    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));
  };



  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
