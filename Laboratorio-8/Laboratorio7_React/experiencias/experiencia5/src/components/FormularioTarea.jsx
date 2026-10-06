import { useState } from "react";

function FormularioTarea({ onAgregar }) {
  const [titulo, setTitulo] = useState("");
  const manejarEnvio = (evento) => {
    evento.preventDefault();
    const limpio = titulo.trim();
    if (!limpio) return;
    onAgregar(limpio);
    setTitulo("");
  };
  return (
    <form onSubmit={manejarEnvio} className="formulario">
      <input value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="Escribe una nueva tarea" />
      <button type="submit">Agregar</button>
    </form>
  );
}
export default FormularioTarea;
