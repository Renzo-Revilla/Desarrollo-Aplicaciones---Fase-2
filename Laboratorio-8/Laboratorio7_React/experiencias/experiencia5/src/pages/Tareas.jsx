import { useEffect, useState } from "react";
import FormularioTarea from "../components/FormularioTarea";
import TareaLista from "../components/TareaLista";

function Tareas() {
  const [tareas, setTareas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((respuesta) => {
        if (!respuesta.ok) throw new Error("No se pudieron obtener las tareas");
        return respuesta.json();
      })
      .then((datos) => setTareas(datos.map((d) => ({
        id: d.id, titulo: d.title, completada: d.completed
      }))))
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false));
  }, []);

  const agregarTarea = (titulo) =>
    setTareas([...tareas, { id: Date.now(), titulo, completada: false }]);

  const alternarTarea = (id) =>
    setTareas(tareas.map((t) =>
      t.id === id ? { ...t, completada: !t.completada } : t
    ));

  if (cargando) return <p>Cargando tareas...</p>;
  if (error) return <p>Ocurrió un error: {error}</p>;

  return (
    <section>
      <h1>Mis tareas</h1>
      <FormularioTarea onAgregar={agregarTarea} />
      <TareaLista tareas={tareas} onAlternar={alternarTarea} />
    </section>
  );
}
export default Tareas;
