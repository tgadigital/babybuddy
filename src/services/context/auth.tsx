import {createContext, useContext} from 'react';
import {User} from '../../types/user';

interface AuthContext {
  user: User | undefined;
  token: string | null;
  setupToken: () => void;
  login: (username: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContext>({
  user: undefined,
  token: null,
  setupToken: () => {},
  login: () => {},
  logout: () => {},
});

const useAuthContext = () => {
  return useContext(AuthContext);
};

export {AuthContext, useAuthContext};
