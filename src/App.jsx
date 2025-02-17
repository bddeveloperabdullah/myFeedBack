import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Search from "./components/Header/Search";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <main>
        <Search />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;
