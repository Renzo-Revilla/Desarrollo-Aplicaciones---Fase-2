import TareaItem from "./TareaItem";
function TareaLista({ tareas, onAlternar }) {
  if (!tareas.length) return <p>No hay tareas registradas.</p>;
  return <ul className="lista">{tareas.map((t) =>
    <TareaItem key={t.id} tarea={t} onAlternar={onAlternar} />
  )}</ul>;
}
export default TareaLista;
