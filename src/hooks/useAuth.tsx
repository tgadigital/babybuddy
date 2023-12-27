import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState} from 'react';
import AuthService from '../services/api/auth';
import {JwtPayload, jwtDecode} from 'jwt-decode';

export const useAuth = () => {
  const [token, setToken] = useState<null | string>(null);

  const setupToken = async () => {
    const localToken = await AsyncStorage.getItem('token');
    if (!localToken) {
      return;
    }
    const {exp} = jwtDecode<JwtPayload>(localToken);
    if (!exp || exp * 1000 >= new Date().getTime()) {
      setToken(null);
      return;
    }
    setToken(localToken);
  };

  const login = async (username: string, password: string) => {
    const {data} = await AuthService.login(username, password);
    const {access_token} = data;
    setToken(access_token);
    await AsyncStorage.setItem('token', access_token);
  };

  const logout = async () => {
    setToken(null);
    await AsyncStorage.removeItem('token');
  };

  const signup = () => AuthService.signup();

  return {
    user: undefined,
    token,
    setupToken,
    login,
    logout,
    signup,
  };
};
