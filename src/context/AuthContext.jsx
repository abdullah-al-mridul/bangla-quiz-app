import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);
const AUTH_TOKEN = "auth_token"; // Token key for localStorage

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check for existing token on initial load
  useEffect(() => {
    const token = localStorage.getItem(AUTH_TOKEN);
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = () => {
    // Generate a simple token (in real apps, this would come from your backend)
    const token = "auth_" + Date.now();
    localStorage.setItem(AUTH_TOKEN, token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem(AUTH_TOKEN);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
