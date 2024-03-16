import AppRouter from "./router/AppRouter";
import MoviesState from "./context/MoviesState";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const App = () => {
  return (
    <MoviesState>
      <AppRouter />
    </MoviesState>
  );
};

export default App;
