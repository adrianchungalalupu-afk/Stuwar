import { useState } from "react";
import "./App.css";
function App() {
const [productos] = useState([
    { id: 1, nombre: "Dento150 con cepillo", precio: 6.5 },
    { id: 2, nombre: "Jabón líquido Aval", precio: 6.0 },
    { id: 3, nombre: "Talco para bebé grande", precio: 12.0 },
    { id: 4, nombre: "Desodorante Rexona", precio: 15.0 },
    { id: 5, nombre: "Desodorante Lady Speed", precio: 14.0 },
    { id: 6, nombre: "Jabón Protex", precio: 4.0 },
    { id: 7, nombre: "Jabón Moncler", precio: 4.8 },
    { id: 8, nombre: "Jabón Neko", precio: 4.0 },
    { id: 9, nombre: "Jabón Heno de Pravia", precio: 5.5 },
    { id: 10, nombre: "Jabón líquido Orion", precio: 5.0 },
    { id: 11, nombre: "Savital frasco", precio: 13.50 },
    { id: 12, nombre: "Nutrivela frasco", precio: 15.00 },
    { id: 13, nombre: "Sedal frasco", precio: 13.50 },
    { id: 14, nombre: "Pantene frasco400", precio: 19.0 },
    { id: 15, nombre: "Pantene acondicionador", precio: 19.0 },
    { id: 16, nombre: "Hys grande375", precio: 18.0 },
    { id: 17, nombre: "Hys mediano180", precio: 10.0 },
    { id: 18, nombre: "Hys chico90", precio: 5.0 },
    { id: 19, nombre: "Pantene chico100", precio: 5.0 },
    { id: 20, nombre: "Ballerina frasco", precio: 11.0 },
    { id: 21, nombre: "Ballerina cojin", precio: 10.0 },
    { id: 22, nombre: "Amen cojin", precio: 22.0 },
    { id: 23, nombre: "Amen acondicionador", precio: 18.0 },
    { id: 24, nombre: "Milo lata", precio: 22.0 },
    { id: 25, nombre: "Eco lata", precio: 7.0 },
    { id: 26, nombre: "Kirma lata", precio: 24.0 },
    { id: 27, nombre: "Orion 1kg", precio: 6.50 },
    { id: 28, nombre: "Dofi 1kg", precio: 5.50 },
    { id: 29, nombre: "Patito 1kg", precio: 5.50 },
    { id: 30, nombre: "Trome 1kg", precio: 5.0 },
    { id: 31, nombre: "Amen colonia", precio: 15.0 },
    { id: 32, nombre: "Amen colonia", precio: 15.0 },
    { id: 33, nombre: "Amen colonia", precio: 15.0 },
  ]);
  const [busqueda, setBusqueda] = useState("");
  const productosFiltrados = productos.filter((producto) =>
  producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
);
  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>📦 Sistema de Productos</h1>
<input
  type="text"
  placeholder="🔍 Buscar producto..."
  value={busqueda}
  onChange={(e) => setBusqueda(e.target.value)}
  style={{
    padding: "10px",
    width: "300px",
    marginBottom: "20px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  }}
/>
      <table
        border="1"
        cellPadding="10"
        style={{ borderCollapse: "collapse", width: "100%" }}
      >
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
          </tr>
        </thead>

        <tbody>
          {productosFiltrados.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.nombre}</td>
              <td>S/ {producto.precio.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App; 