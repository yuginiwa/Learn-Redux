var redux = require('redux');

console.log('Starting redux todo example');

var stateDefault = {
    searchText: '',
    showCompleted: false,
    todos: []
};

var reducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHANGE_SEARCHTEXT":
      return {
        ...state,
        searchText: action.searchText
      };
    default:
      return state;
  }
};

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

console.log('currentState', store.getState());

// Subscribe to Changes
store.subscribe(() => {
  var state = store.getState();
  console.log('searchText is', state.searchText);
  document.getElementById('app').innerHTML = state.searchText;
});

store.dispatch({
  type: "CHANGE_SEARCHTEXT",
  searchText: 'Play Games'
});

store.dispatch({
  type: "CHANGE_SEARCHTEXT",
  searchText: 'Eat'
});
