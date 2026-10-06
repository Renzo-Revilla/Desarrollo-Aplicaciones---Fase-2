function ItemCarrito({ producto, indice, onEliminar }) {
  return (
    <article className="item-carrito">
      <img src={producto.image} alt={producto.title} />
      <div>
        <h3>{producto.title}</h3>
        <p>${producto.price.toFixed(2)}</p>
        <button onClick={() => onEliminar(indice)}>Eliminar</button>
      </div>
    </article>
  );
}
export default ItemCarrito;
