const MoviesReducer = (globalState, action) => {
  switch (action.type) {
    case "OBTENER_PELICULAS":
      return {
        ...globalState,
        movies: action.payload,
      };

    default:
      return globalState;
  }
};

export default MoviesReducer;
