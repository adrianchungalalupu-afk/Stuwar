import { useEffect, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import './App.css';

// Base de datos local de prueba
const productosDB = {
  "7754487003056": { nombre: "Galletas Soda 6pk", precio: 2.50 },
  "7750987654321": { nombre: "Gaseosa 500ml", precio: 3.80 }
};

function App() {
  const [producto, setProducto] = useState({ nombre: "Enfoca un código de barras", precio: null });

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      fps: 10,
      qrbox: { width: 250, height: 150 }
    });

    scanner.render(
      (codigo) => {
        if (productosDB[codigo]) {
          setProducto({
            nombre: productosDB[codigo].nombre,
            precio: `S/ ${productosDB[codigo].precio.toFixed(2)}`
          });
        } else {
          setProducto({
            nombre: `No registrado (${codigo})`,
            precio: "S/ --.--"
          });
        }
      },
      (error) => {
        // Lectura frame a frame
      }
    );

    return () => {
      scanner.clear().catch(err => console.error(err));
    };
  }, []);

  return (
    <div id="center">
      <h2>Escáner de Precios</h2>
      
      {/* Contenedor de la cámara */}
      <div id="reader" style={{ width: '100%', maxWidth: '350px' }}></div>

      {/* Resultado */}
      <div style={{ textAlign: 'center', marginTop: '15px' }}>
        <p style={{ fontSize: '1.2rem', margin: '5px 0' }}>{producto.nombre}</p>
        <h1 style={{ color: 'var(--accent)', fontSize: '2.5rem', margin: 0 }}>
          {producto.precio || "$0.00"}
        </h1>
      </div>
    </div>
  );
}

export default App;