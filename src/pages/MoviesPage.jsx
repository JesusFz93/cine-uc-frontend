import { useEffect, useContext } from "react";
import MoviesContext from "../context/MoviesContext";

const MoviesPage = () => {
  const { movies, obtenerPeliculasAction } = useContext(MoviesContext);

  useEffect(() => {
    obtenerPeliculasAction();
  }, [obtenerPeliculasAction]);

  return (
    <>
      <header className="row">
        <article className="col">
          <h1>Peliculas en cartelera</h1>
        </article>
      </header>
      <main className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
        {movies.map((movie) => (
          <article key={movie.id} className="col">
            <div className="card h-100">
              <img
                src={movie.poster_path}
                className="card-img-top"
                alt={movie.title}
              />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.popularity}</p>
                <div className="d-grid">
                  <button className="btn btn-secondary">Ver mas...</button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </main>
    </>
  );
};

export default MoviesPage;
