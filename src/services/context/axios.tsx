import {createContext, useContext} from 'react';

interface AxiosContext {
  token: null | string;
}

const AxiosContext = createContext<AxiosContext>({
  token: null,
});

const useAuthContext = () => {
  return useContext(AxiosContext);
};

export {AxiosContext, useAuthContext};
