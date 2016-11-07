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
      }
      break;
    default:
      return state;
  }
};

var store = redux.createStore(reducer);
console.log('currentState', store.getState());

store.dispatch({
  type: "CHANGE_SEARCHTEXT",
  searchText: 'Play Games'
});

console.log("searchText should be Play Games", store.getState());
