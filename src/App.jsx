import { useState } from "react";
import "./App.css";
function App() {
  const [productos] = useState([
    { id: 1, nombre: "Dento de 150 con cepillo", precio: 6.5 },
    { id: 2, nombre: "Jabón líquido Aval", precio: 6.0 },
    { id: 3, nombre: "Talco chiquilin", precio: 12.0 },
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
    { id: 14, nombre: "Pantene de 400ml", precio: 19.0 },
    { id: 15, nombre: "Pantene acondicionador", precio: 19.0 },
    { id: 16, nombre: "H y s de 375ml", precio: 18.0 },
    { id: 17, nombre: "H y s de 180ml", precio: 10.0 },
    { id: 18, nombre: "H y s de 90ml", precio: 5.0 },
    { id: 19, nombre: "Pantene de 100ml", precio: 5.0 },
    { id: 20, nombre: "Ballerina frasco", precio: 11.0 },
    { id: 21, nombre: "Ballerina cojin", precio: 10.0 },
    { id: 22, nombre: "Amen cojin", precio: 22.0 },
    { id: 23, nombre: "Amen acondicionador", precio: 18.0 },
    { id: 24, nombre: "Milo lata", precio: 22.0 },
    { id: 25, nombre: "Eco lata", precio: 14.0 },
    { id: 26, nombre: "Kirma lata", precio: 24.0 },
    { id: 27, nombre: "Orion 1kg", precio: 6.50 },
    { id: 28, nombre: "Dofi 1kg", precio: 5.50 },
    { id: 29, nombre: "Patito 1kg", precio: 5.50 },
    { id: 30, nombre: "Trome 1kg", precio: 5.0 },
    { id: 31, nombre: "Ariel 720g", precio: 9.0 },
    { id: 32, nombre: "Marsella 730g", precio:   7.0 },
    { id: 33, nombre: "Bolivar 730g", precio: 9.0 },
    { id: 34, nombre: "Altomayo frasco", precio: 30.0 },
    { id: 35, nombre: "Altomayo 90g", precio: 18.0 },
    { id: 36, nombre: "Altomayo 45g", precio: 9.0 },
    { id: 37, nombre: "Tuinies 1L", precio: 28.0 },
    { id: 38, nombre: "Tuinies 500ml", precio: 15.0 },
    { id: 39, nombre: "Pañitos humedos grande", precio: 6.5 },
    { id: 40, nombre: "Pañitos humedos mediano", precio: 5.0 },
    { id: 41, nombre: "Pañitos humedos ", precio: 2.0 },
    { id: 42, nombre: "Durazno Aconcagua", precio: 10.0 },
    { id: 43, nombre: "Durazno Compas", precio: 10.0 },
  ]);
  const [busqueda, setBusqueda] = useState("");
  // Función para escuchar y responder el precio por voz
const hablarYBuscar = () => {
  // Verificar si el navegador soporta reconocimiento de voz
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Tu navegador no soporta búsqueda por voz. Prueba en Chrome o Edge.");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "es-ES"; // Configurado en español

  recognition.onresult = (event) => {
    const textoDicho = event.results[0][0].transcript.toLowerCase();
    setBusqueda(textoDicho); // Actualiza la barra de búsqueda visualmente

    // Buscar si algún producto coincide con lo que se dijo
    const encontrado = productos.find((p) =>
      p.nombre.toLowerCase().includes(textoDicho)
    );

    // Preparar el mensaje de respuesta por altavoz
    const voz = new SpeechSynthesisUtterance();
    if (encontrado) {
      voz.text = `El precio de ${encontrado.nombre} es ${encontrado.precio} soles`;
    } else {
      voz.text = `Lo siento, no encontré el producto ${textoDicho}`;
    }

    // El navegador habla la respuesta
    window.speechSynthesis.speak(voz);
  };

  recognition.start();
};
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
<button 
  onClick={hablarYBuscar}
  style={{
    padding: "10px 15px",
    marginLeft: "10px",
    backgroundColor: "#25D366",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold"
  }}
>
  🎤 Hablar
</button>

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