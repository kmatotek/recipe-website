import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Breakfast from "./pages/Breakfast.tsx";
import styles from "./App.module.css";
import Dessert from "./pages/Dessert.tsx";
import Dinner from "./pages/Dinner.tsx";
import RecipePage from "./pages/RecipePage.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/breakfast" element={<Breakfast />} />
        <Route path="/dinner" element={<Dinner />} />
        <Route path="/dessert" element={<Dessert />} />
        <Route path="/recipe/:name" element={<RecipePage />} />
      </Routes>
    </BrowserRouter>
  );
}
