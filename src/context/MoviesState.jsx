import { useReducer, useCallback } from "react";
import MoviesContext from "./MoviesContext";
import MoviesReducer from "./MoviesReducer";
import PropTypes from "prop-types";
import {
  obtenerPeliculasService,
  obtenerPeliculaService,
} from "../services/moviesServices";

const initialState = {
  movies: [],
  movie: {},
};

const MoviesState = ({ children }) => {
  const [globalState, dispatch] = useReducer(MoviesReducer, initialState);

  const obtenerPeliculasAction = useCallback(async () => {
    const resp = await obtenerPeliculasService();

    const action = {
      type: "OBTENER_PELICULAS",
      payload: resp.data.data,
    };

    dispatch(action);
  }, []);

  const obtenerPeliculaAction = useCallback(async (id) => {
    const resp = await obtenerPeliculaService(id);

    const action = {
      type: "OBTENER_PELICULA",
      payload: resp.data.data,
    };

    dispatch(action);
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        movies: globalState.movies,
        obtenerPeliculasAction,
        obtenerPeliculaAction,
        movie: globalState.movie,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

MoviesState.propTypes = {
  children: PropTypes.node,
};

export default MoviesState;
