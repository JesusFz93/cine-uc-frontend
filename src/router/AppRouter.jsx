import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MoviesPage from "../pages/MoviesPage";
import MoviePage from "../pages/MoviePage";
import Navbar from "../components/Navbar";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<MoviePage />} />

          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
