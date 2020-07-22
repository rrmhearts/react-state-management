import React, { useReducer, createContext, useEffect } from "react";
import { useActions } from './actions';
import { reducer, initialState } from './reducers';
const Context = createContext();


const ContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Dispatch is only called here in useActions... remove from Provider.
  const actions = useActions(state, dispatch);

  useEffect(() => console.log({ newState: state }),[state]);

  return (
    // THIS WILL re-render EVERY CONSUMER component on state change
    // That is why we use hooks in each component, re-render triggers state update..
    <Context.Provider value={{state, actions}}>
      {props.children}
    </Context.Provider>
  );
}; 

export { Context, ContextProvider }