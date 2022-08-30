import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ListPatient } from "./components/Modulos/ListPatient";
import { Home } from "./components/Pages/Home";
import { InexistentPage } from "./components/Pages/InexistentPage";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<ListPatient />} />
        <Route path="*" element={<InexistentPage />} />
      </Routes>
    </BrowserRouter>
  );
}
