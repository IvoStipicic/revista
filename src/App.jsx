import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Introduccion from "./paginas/Introduccion";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="revista/introduccion" element={<Introduccion />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
