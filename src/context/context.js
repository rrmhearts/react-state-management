import React, { useReducer, createContext } from "react";

export const Context = createContext();

const initialState = {
  contacts: [
    {
      id: "098",
      name: "Diana Prince",
      email: "diana@us.army.mil"
    },
    {
      id: "099",
      name: "Bruce Wayne",
      email: "bruce@batmail.com"
    },
    {
      id: "100",
      name: "Clark Kent",
      email: "clark@metropolitan.com"
    }
  ],
  counter: 0,
  loading: false,
  error: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      };
    case "DEL_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "INCREMENT_COUNTER":
      // console.log('incrementing...', action)
      return {
        ...state,
        counter: state.counter + 1
      }
      break;
    case "DECREMENT_COUNTER":
      return {
        ...state,
        counter: state.counter - 1
      }
    case "START":
      return {
        ...state,
        loading: true
      };
    case "COMPLETE":
      return {
        ...state,
        loading: false
      };
    default:
      throw new Error();
  }
  return state;
};

export const ContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>
      {props.children}
    </Context.Provider>
  );
}; 