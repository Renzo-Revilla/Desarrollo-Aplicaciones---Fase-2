function BuscadorProducto({ busqueda, setBusqueda }) {
  return (
    <input
      className="buscador"
      type="text"
      value={busqueda}
      onChange={(e) => setBusqueda(e.target.value)}
      placeholder="Buscar producto por nombre..."
    />
  );
}
export default BuscadorProducto;
