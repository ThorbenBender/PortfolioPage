import React, { useState } from 'react';
import Context from './Context';

const ContextProvider = ({ children }) => {
  const [modals, setModals] = useState([]);
  const [hiddenApplication, setHiddenApplication] = useState([]);

  const addModal = modal => {
    if (!modals.includes(modal)) {
      setModals(prevState => [...prevState, modal]);
    }
  };

  const closeModal = modal => {
    setModals(prevState => prevState.filter(m => m !== modal));
  };

  const toggleApplication = modal => {
    console.log(modal);
    if (hiddenApplication.includes(modal)) {
      setHiddenApplication(prevState => prevState.filter(m => m !== modal));
    } else {
      setHiddenApplication(prevState => [modal, ...prevState]);
    }
  };

  const highlightApplication = modal => {
    let newModals = modals.filter(m => m !== modal);
    newModals = [...newModals, modal];
    setModals(newModals);
  };

  return (
    <Context.Provider
      value={{
        modals: modals,
        addModal: addModal,
        closeModal: closeModal,
        toggleApplication: toggleApplication,
        hiddenApplication: hiddenApplication,
        highlightApplication: highlightApplication
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
