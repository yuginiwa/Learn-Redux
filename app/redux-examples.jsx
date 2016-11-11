var redux = require("redux");

console.log("Starting redux examples");

var actions = require('./action/index');
var store = require('./store/configureStore').configure();

var currentState = store.getState();

console.log('currentState', currentState);

// Subscribe to Changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('state', store.getState());

  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading....';
  } else if (state.map.url) {
    document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blank">View Your Location</a>'
  }
});
// unsubscribe();

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Carl'));

store.dispatch(actions.addHobby('Playing Games'));

store.dispatch(actions.addHobby('Eat'));

store.dispatch(actions.removeHobby(2));

store.dispatch(actions.addMovie(
  "Toy's Story 3",
  "Animation"
));

store.dispatch(actions.addMovie(
  "The Buzz Light Year",
  "Animation"
));

store.dispatch(actions.removeMovie(1));

store.dispatch(actions.changeName('Nicole'));
