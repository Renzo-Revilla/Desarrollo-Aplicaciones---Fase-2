import { useOutletContext } from "react-router-dom";
import ItemCarrito from "./ItemCarrito";

function Carrito() {
  const { carrito, setCarrito } = useOutletContext();

  const eliminar = (indice) =>
    setCarrito(carrito.filter((_, i) => i !== indice));

  const total = carrito.reduce((suma, p) => suma + p.price, 0);

  return (
    <section>
      <h2>Mi carrito</h2>
      {!carrito.length ? <p>El carrito está vacío.</p> : (
        <>
          {carrito.map((p, i) =>
            <ItemCarrito key={`${p.id}-${i}`} producto={p} indice={i} onEliminar={eliminar} />
          )}
          <h3>Total: ${total.toFixed(2)}</h3>
        </>
      )}
    </section>
  );
}
export default Carrito;
