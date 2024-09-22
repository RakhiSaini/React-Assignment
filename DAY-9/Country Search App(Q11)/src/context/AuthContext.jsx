import React, { createContext, useReducer } from 'react';
import AuthReducer from '../reducers/AuthReducer';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, { isAuthenticated: false, user: null });

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
