import React, { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "../storage/localStorage";

//getting the prev state/data from local storage
const getInitialState = () => {
  const localData = getFromLocalStorage("transactions");
  return localData ? { transactions: localData } : { transactions: [] };
};

// Initial state
const initialState = getInitialState();

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    if (state.transactions) {
      saveToLocalStorage("transactions", state.transactions);
    }
  }, [state.transactions]);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }
  function updateCategory(id, category) {
    dispatch({
      type: "UPDATE_CATEGORY",
      payload: { id, category },
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        updateCategory,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
