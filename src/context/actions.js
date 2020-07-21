import _ from "lodash";

const types = {
    SET_TECH_LIST: "SET_TECH_LIST",
    ADD_TO_TECH_LIST: "ADD_TO_TECH_LIST",
    REMOVE_FROM_TECH_LIST: "REMOVE_FROM_TECH_LIST",
    ADD_CONTACT: "ADD_CONTACT",
    DEL_CONTACT: "DEL_CONTACT",
    INCREMENT_COUNTER: "INCREMENT_COUNTER",
    DECREMENT_COUNTER: "DECREMENT_COUNTER"
};

const useActions = (state, dispatch) => {

    // List of actions
    const addTechIfNotInList = (newTech) => {
        const techIndex = state.techList.indexOf(newTech);
        if (techIndex !== -1) {
            alert("Tech is defined in list");
        } else {
            dispatch({ type: types.ADD_TO_TECH_LIST, payload: newTech });
        }
    }

    const addContact = (name, email) => {
        dispatch({
            type: types.ADD_CONTACT,
            payload: { id: _.uniqueId(10), name: name, email: email }
          });
    }

    const delContact = id => {
        dispatch({
          type: types.DEL_CONTACT,
          payload: id
        });
      };
    const increment = () => {
        dispatch({
            type: types.INCREMENT_COUNTER
        });
    };

    const decrement = () => {
        dispatch({
            type: types.DECREMENT_COUNTER
        });
    };

    return {
        addContact,
        addTechIfNotInList,
        delContact,
        decrement,
        increment
    };
};

export {types, useActions};