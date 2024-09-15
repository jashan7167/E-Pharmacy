import { createContext, useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { executeJwtAuthenticationService } from "../Api/apiservice";
import { apiClient } from "../Api/apiclient";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

function Auth({ children }) {
  const [isAuthenticated, setAuthenticated] = useState(false);

  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");
  async function login(username, password) {
    try {
      const response = await executeJwtAuthenticationService(
        username,
        password
      );
      if (response.status == 200) {
        const jwtToken = "Bearer " + response.data.token;
        console.log(jwtToken);
        setAuthenticated(true);
        setUsername(username);
        setToken(jwtToken);
        apiClient.interceptors.request.use((config) => {
          config.headers.Authorization = jwtToken;
          return config;
        });
        return true;
      } else {
        setAuthenticated(false);
        setToken(null);
        return false;
      }
    } catch (error) {
      console.log(error);
      setAuthenticated(false);
      setUsername(null);
      setToken(null);
      return false;
    }
  }

  function logout() {
    setAuthenticated(false);
    setToken(null);
  }
  const valueShare = {
    username,
    isAuthenticated,
    setAuthenticated,
    login,
    logout,
    token,
  };

  return (
    <AuthContext.Provider value={valueShare}>{children}</AuthContext.Provider>
  );
}

export default Auth;
