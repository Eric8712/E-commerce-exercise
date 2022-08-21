import "./styles.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MenPage from "./pages/MenPage";
import WomenPage from "./pages/WomenPage";
import ShoesPage from "./pages/Shoes";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/MenPage" element={<MenPage />} />
        <Route path="/WomenPage" element={<WomenPage />} />
        <Route path="/ShoesPage" element={<ShoesPage />} />
        <Route path="/:ProductName" element={<ProductPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/CartPage" element={<CartPage />} />
      </Routes>
    </Router>
  );
};

export default App;
