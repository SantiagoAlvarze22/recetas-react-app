import React, { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

export const UserProvider = (props) => {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('login') === 'true') {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, []);

  const value = {
    login,
    setLogin,
  };

  return <UserContext.Provider value={value} {...props} />;
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('UseUser must be within userProvider Provider');
  }
  return context;
};
