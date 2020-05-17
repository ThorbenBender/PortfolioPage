import React, { useState } from 'react';
import Context from './Context';

const ContextProvider = ({ children }) => {
  const [modals, setModals] = useState([]);

  const addModal = modal => {
    setModals(prevState => [modal, ...prevState]);
  };

  return (
    <Context.Provider value={{ modals: modals, addModal: addModal }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
