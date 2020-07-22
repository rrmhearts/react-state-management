import { actions } from './actions';
import { createStore, /*createSubscriber,*/ createHook } from 'react-sweet-state';

const Store = createStore({
  // value of the store on initialisation
  initialState: {
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
  },
  // actions that trigger store mutation
  actions: actions,
  // optional, mostly used for easy debugging
  name: 'counter'
});

const useSweetState = createHook(Store);


export { useSweetState }