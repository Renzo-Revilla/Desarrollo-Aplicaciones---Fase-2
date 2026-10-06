import ProductoCard from "./ProductoCard";
function ListaProductos({ productos, onAgregar }) {
  if (!productos.length) return <p>No se encontraron productos.</p>;
  return (
    <section className="grid">
      {productos.map((p) =>
        <ProductoCard key={p.id} producto={p} onAgregar={onAgregar} />
      )}
    </section>
  );
}
export default ListaProductos;
