// var oldReducer = (state = stateDefault, action) => {
//     // state = state || {name: 'Anonymous'};
//     switch (action.type) {
//       case 'CHANGE_NAME':
//         return {
//           ...state,
//           name: action.name
//         };
//       case 'ADD_HOBBY':
//         return {
//           ...state,
//           hobbies: [
//             ...state.hobbies,
//             {
//               id: nextHobbyId++,
//               hobby: action.hobby
//             }
//           ]
//         };
//       case 'REMOVE_HOBBY':
//         return {
//           ...state,
//           hobbies: state.hobbies.filter(function (hobby) {
//             return hobby.id !== action.id;
//           })
//         };
//         case 'ADD_MOVIE':
//           return {
//             ...state,
//             movies: [
//               ...state.movies,
//               {
//                 id: nextMoviesId++,
//                 movie: action.movie,
//                 genre: action.genre
//               }
//             ]
//           };
//         case 'REMOVE_MOVIE':
//           return {
//             ...state,
//             movies: state.movies.filter((movie) => movie.id !== action.id)
//           };
//       default:
//         return state;
//     }
// };
