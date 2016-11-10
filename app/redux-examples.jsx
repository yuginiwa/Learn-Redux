var redux = require("redux");

console.log("Starting redux examples");

var stateDefault = {
    name: 'Anonymous',
    hobbies: [],
    movies: []
};



// Name reducer and action generator
// ----------------
var nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return action.name;
    default:
      return state;
  }
};

var changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name
  }
}

// Hobbies reducer and action generator
// ----------------
var nextHobbyId = 1;
var hobbiesReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_HOBBY":
      return [
        ...state,
        {
          id: nextHobbyId++,
          hobby: action.hobby
        }
      ];
    case "REMOVE_HOBBY":
      return state.filter((hobby) => hobby.id !== action.id);
    default:
      return state;
  }
};

var addHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby
  }
}

var removeHobby = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id
  }
}

// Movies reducer and action generator
// ----------------
var nextMoviesId = 1;
var moviesReducer = (state = [], action ) => {
  switch (action.type) {
    case "ADD_MOVIE":
      return [
        ...state,
        {
          id: nextMoviesId++,
          movie: action.movie,
          genre: action.genre
        }
      ];
    case "REMOVE_MOVIE":
      return state.filter((movie) => movie.id !== action.id);
    default:
      return state;
  }
};

var addMovie = (movie, genre) => {
  return {
    type: 'ADD_MOVIE',
    movie,
    genre
  }
}

var removeMovie = (id) => {
  return {
    type: 'REMOVE_MOVIE',
    id
  }
}

var reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer
});

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

  console.log('state', store.getState());
});
// unsubscribe();

store.dispatch(changeName('Carl'));

store.dispatch(addHobby('Playing Games'));

store.dispatch(addHobby('Eat'));

store.dispatch(removeHobby(2));

store.dispatch(addMovie(
  "Toy's Story 3",
  "Animation"
));

store.dispatch(addMovie(
  "The Buzz Light Year",
  "Animation"
));

store.dispatch(removeMovie(1));

store.dispatch(changeName('Nicole'));
