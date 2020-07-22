import _ from "lodash";

const actions = {

    // List of actions
    addTechIfNotInList: (newTech) => ({ setState, getState }) => {
        const techIndex = getState().techList.indexOf(newTech);
        if (techIndex !== -1) {
            alert("Tech is defined in list");
        } else {
            setState({
                techList: [...getState().techList, newTech]
            });
        }
    },
    addContact: (name, email) => ({ setState, getState }) => {
        setState({
            contacts: [
                ...getState().contacts,
                { id: _.uniqueId(10), name: name, email: email }
            ]
        });
    },
    delContact: id => ({ setState, getState }) => {
        setState({
            contacts: getState().contacts.filter(
                contact => contact.id !== id
            )
        });
    },
    increment: () => ({ setState, getState }) => {
        setState({
            counter: getState().counter + 1
        });
    },
    decrement: () => ({ setState, getState }) => {
        setState({
            counter: getState().counter - 1
        });
    }
};

export { actions };