import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Catalogo from "./pages/Catalogo";
import Carrito from "./components/Carrito";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/catalogo" replace />} />
        <Route path="/catalogo" element={<Catalogo />}>
          <Route path="carrito" element={<Carrito />} />
        </Route>
        <Route path="*" element={<p className="mensaje">Página no encontrada</p>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
