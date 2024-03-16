import axios from "axios";

const URL = "https://cine-uc-backend.onrender.com/movies";
// const URL = "http://localhost:4000/movies";

const obtenerPeliculasService = async () => {
  const resp = await axios.get(`${URL}`);
  return resp;
};

const obtenerPeliculaService = async (id) => {
  const resp = await axios.get(`${URL}/${id}`);
  return resp;
};

export { obtenerPeliculasService, obtenerPeliculaService };
