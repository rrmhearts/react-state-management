import { types } from './actions';

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
    techList: ["TypeScript", "React Hooks"],
    counter: 0,
    loading: false,
    error: null
};

const reducer = (state, action) => {
    switch (action.type) {
        case types.ADD_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            };
        case types.DEL_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(
                    contact => contact.id !== action.payload
                )
            };
        case types.INCREMENT_COUNTER:
            return {
                ...state,
                counter: state.counter + 1
            }
        case types.DECREMENT_COUNTER:
            return {
                ...state,
                counter: state.counter - 1
            }
        case types.SET_TECH_LIST:
            return {
                ...state,
                techList: action.payload
            };
        case types.ADD_TO_TECH_LIST:
            return {
                ...state,
                techList: [...state.techList, action.payload]
            };
        case types.REMOVE_FROM_TECH_LIST:
            return {
                ...state,
                techList: state.techList.filter(
                    tech => tech !== action.payload)
            };
        default:
            throw new Error();
    }
};
export { initialState, reducer };