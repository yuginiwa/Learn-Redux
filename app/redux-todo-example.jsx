var redux = require('redux');

console.log('Starting redux todo example');

var stateDefault = {
    search: '',
    showCompleted: false,
    todos: []
};

var reducer = (state = stateDefault, action) => {
    return state;
};

var store = redux.createStore(reducer);
console.log('currentState', store.getState());
