import React, { createContext, useState, useContext } from 'react';

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [sharedData, setSharedData] = useState({
    username: 'JohnDoe',
    isAdmin: true,
    read_id:null
  });

  // Function to update the context value
  const updateContextValue = (newData) => {
    console.log(newData)
    setSharedData((prevData) => ({ ...prevData, ...newData }));
  };

  return (
    <MyContext.Provider value={{ ...sharedData, updateContextValue }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};
