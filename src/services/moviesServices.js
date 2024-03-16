import axios from "axios";

const obtenerPeliculasService = async () => {
  const resp = await axios.get("https://cine-uc-backend.onrender.com/movies");
  return resp;
};

export { obtenerPeliculasService };
