import { Home } from "./pages/Home";
import { ListPatient } from "./pages/ListPatient";
import { GlobalStyle } from "./styles/global";

export function App() {
  const temporaryDevSelector = false;
  return (
    <>
      {temporaryDevSelector ? <Home /> : <ListPatient />}

      <GlobalStyle />
    </>
  );
}
