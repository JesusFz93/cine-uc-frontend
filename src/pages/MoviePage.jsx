import { useEffect, useContext } from "react";
import MoviesContext from "../context/MoviesContext";
import { useParams } from "react-router-dom";

const MoviePage = () => {
  const { movie, obtenerPeliculaAction } = useContext(MoviesContext);

  const { id } = useParams();

  useEffect(() => {
    obtenerPeliculaAction(id);
  }, [obtenerPeliculaAction, id]);

  return (
    <main className="row">
      <article className="col">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={movie.poster_path}
                className="img-fluid rounded-start"
                alt={movie.title}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.overview}</p>
                <p className="card-text">{movie.popularity}</p>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td colSpan={2}>Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
                <div id="carouselExample" className="carousel slide">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="..." className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src="..." className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src="..." className="d-block w-100" alt="..." />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>

                <p className="card-text">
                  <small className="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};

export default MoviePage;
