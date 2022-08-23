import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Introduccion from "./paginas/Introduccion";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/revista" element={<Layout />}>
          <Route path="introduccion" element={<Introduccion />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
