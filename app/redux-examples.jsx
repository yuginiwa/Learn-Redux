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

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

var currentState = store.getState();

console.log('currentState', currentState);

// Subscribe to Changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('Name is', state.name);
  document.getElementById('app').innerHTML = state.name;
});
// unsubscribe();
store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Carl'
});

store.dispatch({
  type: "CHANGE_NAME",
  name: "Carl Vincent"
});
