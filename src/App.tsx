import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { InexistentPage } from "./pages/InexistentPage";
import { ListPatient } from "./pages/ListPatient";

import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<ListPatient />} />
        <Route path="*" element={<InexistentPage />} />
      </Routes>

      <GlobalStyle />
    </BrowserRouter>
  );
}
