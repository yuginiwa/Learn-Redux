var redux = require("redux");

console.log("Starting redux examples");

var reducer = (state = {
    name: 'Anonymous'
}, action) => {
    // state = state || {name: 'Anonymous'};
    switch (action.type) {
      case 'CHANGE_NAME':
        return {
          ...state,
          name: action.name
        }
        break;
      default:
        return state;
    }
};

var store = redux.createStore(reducer);

var currentState = store.getState();

console.log('currentState', currentState);

var action = {
  type: 'CHANGE_NAME',
  name: 'Carl'
};

store.dispatch(action);

console.log('Name should be Carl', store.getState());
