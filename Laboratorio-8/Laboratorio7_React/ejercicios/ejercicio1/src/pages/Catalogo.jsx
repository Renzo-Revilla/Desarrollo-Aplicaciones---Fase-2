import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import ListaProductos from "../components/ListaProductos";
import BuscadorProducto from "../components/BuscadorProducto";

function Catalogo() {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const enCarrito = location.pathname.endsWith("/carrito");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((respuesta) => {
        if (!respuesta.ok) throw new Error("No se pudo cargar el catálogo");
        return respuesta.json();
      })
      .then(setProductos)
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false));
  }, []);

  const agregarAlCarrito = (producto) => setCarrito([...carrito, producto]);

  const filtrados = productos.filter((p) =>
    p.title.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <>
      <header className="cabecera">
        <h1>Tienda React</h1>
        <nav>
          <Link to="/catalogo">Catálogo</Link>
          <Link to="/catalogo/carrito">Carrito ({carrito.length})</Link>
        </nav>
      </header>

      <main className="contenedor">
        {enCarrito ? (
          <Outlet context={{ carrito, setCarrito }} />
        ) : (
          <>
            <h2>Catálogo de productos</h2>
            <BuscadorProducto busqueda={busqueda} setBusqueda={setBusqueda} />
            {cargando && <p>Cargando productos...</p>}
            {error && <p className="error">Error: {error}</p>}
            {!cargando && !error &&
              <ListaProductos productos={filtrados} onAgregar={agregarAlCarrito} />}
          </>
        )}
      </main>
    </>
  );
}
export default Catalogo;
