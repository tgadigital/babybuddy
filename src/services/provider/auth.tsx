import React, {PropsWithChildren} from 'react';
import {AuthContext} from '../context/auth';
import {useAuth} from '../../hooks/useAuth';

const AuthProvider = ({children}: PropsWithChildren) => {
  const {user, token, setupToken, login, logout} = useAuth();

  return (
    <AuthContext.Provider value={{user, token, setupToken, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
