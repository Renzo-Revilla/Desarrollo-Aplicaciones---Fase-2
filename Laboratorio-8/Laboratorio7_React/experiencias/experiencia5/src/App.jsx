import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Tareas from "./pages/Tareas";

function App() {
  return (
    <BrowserRouter>
      <nav className="nav">
        <strong>TaskFlow</strong>
        <div>
          <Link to="/">Inicio</Link>
          <Link to="/tareas">Tareas</Link>
        </div>
      </nav>
      <main className="contenedor">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/tareas" element={<Tareas />} />
          <Route path="*" element={<p>Página no encontrada</p>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
export default App;
