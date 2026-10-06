function TareaItem({ tarea, onAlternar }) {
  return (
    <li className="item">
      <span className={tarea.completada ? "completada" : ""}>{tarea.titulo}</span>
      <button onClick={() => onAlternar(tarea.id)}>
        {tarea.completada ? "Deshacer" : "Completar"}
      </button>
    </li>
  );
}
export default TareaItem;
