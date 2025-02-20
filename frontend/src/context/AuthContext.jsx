import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Get stored user from localStorage (if exists) or set to null
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Login function: Takes userData (optional) or defaults to a sample user
  const login = (userData = { name: "leo", role: "user" }) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); // Save user in localStorage
  };

  // Logout function: Clears user state and localStorage
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook to Use Auth Context
export const useAuth = () => {
  return useContext(AuthContext);
};
