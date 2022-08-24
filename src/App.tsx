import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { ListPatient } from "./pages/ListPatient";

import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<ListPatient />} />
      </Routes>

      <GlobalStyle />
    </BrowserRouter>
  );
}
