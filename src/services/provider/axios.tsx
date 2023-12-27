import {useNavigation} from '@react-navigation/core';
import {AxiosError, AxiosResponse, HttpStatusCode} from 'axios';
import React, {PropsWithChildren, useEffect} from 'react';
import {useAuthContext} from '../context/auth';
import {AxiosContext} from '../context/axios';
import api from '../api/api';

const AxiosProvider = ({children}: PropsWithChildren) => {
  const navigation = useNavigation();
  const {token} = useAuthContext();

  useEffect(() => {
    api.defaults.headers.Authorization = token ? `Bearer ${token}` : '';
  }, [token]); //todo

  api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      const status = error.response?.status;
      const authErrors = [
        HttpStatusCode.Unauthorized,
        HttpStatusCode.Forbidden,
      ];

      if (status === HttpStatusCode.BadRequest) {
        // Handle error message

        return Promise.reject(error.response?.data);
      }

      if (status && authErrors.includes(status)) {
      }

      if (status === HttpStatusCode.NotFound) {
        return navigation.navigate('NotFound');
      }

      if (status === HttpStatusCode.InternalServerError) {
      }

      return Promise.reject(error);
    },
  );
  return (
    <AxiosContext.Provider value={{token}}>{children}</AxiosContext.Provider>
  );
};

export default AxiosProvider;
