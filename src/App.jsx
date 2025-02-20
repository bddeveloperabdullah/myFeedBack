import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Search from "./components/Header/Search";
import Footer from "./components/Footer/Footer";
import ResturantPage from "./pages/ResturantPage/ResturantPage";
import { SingleResturantPage } from "./pages/SingleResturantPage/SingleResturantPage";

function App() {
  return (
    <>
      <main>
        <Search />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/all" element={<HomePage />} />
          <Route path="/resturant" element={<ResturantPage />} />
          <Route path="/resturant/:id" element={<SingleResturantPage />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;
