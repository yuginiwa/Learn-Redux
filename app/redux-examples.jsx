var redux = require("redux");
var axios = require("axios");

console.log("Starting redux examples");




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
  };
};

var removeMovie = (id) => {
  return {
    type: 'REMOVE_MOVIE',
    id
  };
};

// Movies reducer and action generator
// ----------------
var mapReducer = (state = {isFetching: false, url: undefined} , action) => {
  switch (action.type) {
    case "START_LOCATION_FETCH":
      return {
        isFetching: true,
        url: undefined
      };
    case "COMPLETE_LOCATION_FETCH":
      return {
        isFetching: false,
        url: action.url
      };
    default:
      return state;
  }
};

var startLocationFetch = () => {
  return {
    type: 'START_LOCATION_FETCH'
  };
};

var completeLocationFetch = (url) => {
  return {
    type: 'COMPLETE_LOCATION_FETCH',
    url
  };
};

var fetchLocation = () => {
  store.dispatch(startLocationFetch());

  axios.get('http://ipinfo.io').then(function (res) {
    var loc = res.data.loc;
    var baseURL = 'http://maps.google.com?q=';

    store.dispatch(completeLocationFetch(baseURL + loc));
  });
}


var reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer,
  map: mapReducer
});

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

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

fetchLocation();

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
