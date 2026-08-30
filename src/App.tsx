import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Breakfast_Lunch from "./pages/Breakfast_Lunch.tsx";
import Appetizers_Dinner from "./pages/Appetizers_Dinner.tsx";
import Desserts_Baked_Goods from "./pages/Desserts_Baked_Goods.tsx";
import styles from "./App.module.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/breakfast_lunch" element={<Breakfast_Lunch />} />
        <Route path="/appetizers_dinner" element={<Appetizers_Dinner />} />
        <Route
          path="/desserts_baked_goods"
          element={<Desserts_Baked_Goods />}
        />
      </Routes>
    </BrowserRouter>
  );
}
