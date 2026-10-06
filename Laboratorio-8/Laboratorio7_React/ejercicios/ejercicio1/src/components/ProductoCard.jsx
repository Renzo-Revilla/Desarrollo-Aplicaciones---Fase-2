function ProductoCard({ producto, onAgregar }) {
  return (
    <article className="producto">
      <img src={producto.image} alt={producto.title} />
      <h3>{producto.title}</h3>
      <p className="precio">${producto.price.toFixed(2)}</p>
      <button onClick={() => onAgregar(producto)}>Agregar al carrito</button>
    </article>
  );
}
export default ProductoCard;
