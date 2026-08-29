import { useEffect, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import './App.css';

// Base de datos local de prueba
const productosBD = {
  "7751851014823": { id: 1, nombre: "Dento de 150 con cepillo", precio: 6.5 },
  "7750890000021": { id: 2, nombre: "Jabón líquido Aval", precio: 6.0 },
  "7750000000038": { id: 3, nombre: "Talco chiquilin", precio: 12.0 },
  "7791293040045": { id: 4, nombre: "Desodorante Rexona", precio: 15.0 },
  "7791293050051": { id: 5, nombre: "Desodorante Lady Speed", precio: 14.0 },
  "7750128006068": { id: 6, nombre: "Jabón Protex", precio: 4.0 },
  "7750128007075": { id: 7, nombre: "Jabón Moncler", precio: 4.8 },
  "7750128008082": { id: 8, nombre: "Jabón Neko", precio: 4.0 },
  "8411135009099": { id: 9, nombre: "Jabón Heno de Pravia", precio: 5.5 },
  "7750890010105": { id: 10, nombre: "Jabón líquido Orion", precio: 5.0 },
  "7750128011111": { id: 11, nombre: "Savital frasco", precio: 13.50 },
  "7750128012125": { id: 12, nombre: "Nutrivela frasco", precio: 15.00 },
  "7750128013132": { id: 13, nombre: "Sedal frasco", precio: 13.50 },
  "7509546070149": { id: 14, nombre: "Pantene de 400ml", precio: 19.0 },
  "7509546070156": { id: 15, nombre: "Pantene acondicionador", precio: 19.0 },
  "7509546070163": { id: 16, nombre: "H y s de 375ml", precio: 18.0 },
  "7509546070170": { id: 17, nombre: "H y s de 180ml", precio: 10.0 },
  "7509546070187": { id: 18, nombre: "H y s de 90ml", precio: 5.0 },
  "7509546070194": { id: 19, nombre: "Pantene de 100ml", precio: 5.0 },
  "7750128020202": { id: 20, nombre: "Ballerina frasco", precio: 11.0 },
  "7750128021216": { id: 21, nombre: "Ballerina cojin", precio: 10.0 },
  "7750128022223": { id: 22, nombre: "Amen cojin", precio: 22.0 },
  "7750128023230": { id: 23, nombre: "Amen acondicionador", precio: 18.0 },
  "7702024069676": { id: 24, nombre: "Milo lata", precio: 22.0 },
  "7750001025251": { id: 25, nombre: "Eco lata", precio: 14.0 },
  "7750001026265": { id: 26, nombre: "Kirma lata", precio: 24.0 },
  "7750890027271": { id: 27, nombre: "Orion 5kg balde", precio: 33.00 },
  "7750890028288": { id: 28, nombre: "Orion 5kg", precio: 28.50 },
  "7750128029298": { id: 29, nombre: "Patito 1kg", precio: 5.50 },
  "7750128030300": { id: 30, nombre: "Trome 1kg", precio: 5.0 },
  "7501001131317": { id: 31, nombre: "Ariel 720g", precio: 9.0 },
  "7750128032328": { id: 32, nombre: "Marsella 730g", precio: 7.0 },
  "7750128033335": { id: 33, nombre: "Bolivar 730g", precio: 9.0 },
  "7750463001412": { id: 34, nombre: "Altomayo frasco", precio: 30.0 },
  "7750463035356": { id: 35, nombre: "Altomayo 90g", precio: 18.0 },
  "7750463036363": { id: 36, nombre: "Altomayo 45g", precio: 9.0 },
  "7750000037372": { id: 37, nombre: "Tuinies 1L", precio: 28.0 },
  "7750000038389": { id: 38, nombre: "Tuinies 500ml", precio: 15.0 },
  "7750000039396": { id: 39, nombre: "Pañitos humedos grande", precio: 6.5 },
  "7750000040408": { id: 40, nombre: "Pañitos humedos mediano", precio: 5.0 },
  "7750000041415": { id: 41, nombre: "Pañitos humedos", precio: 2.0 },
  "7802000042426": { id: 42, nombre: "Durazno Aconcagua", precio: 10.0 },
  "7750000043439": { id: 43, nombre: "Durazno Compas", precio: 10.0 },
  "7702000044440": { id: 44, nombre: "Chocolisto", precio: 12.5 },
  "7750128045459": { id: 45, nombre: "Mermelada Deli 950g", precio: 13.0 },
  "7750128046466": { id: 46, nombre: "Mermelada Deli 290g", precio: 5.0 },
  "7750128047470": { id: 47, nombre: "Dofi 1kg", precio: 5.50 },
  "7750128048487": { id: 48, nombre: "Dofi 2kg", precio: 11.0 },
  "7750128049494": { id: 49, nombre: "Dofi 4kg", precio: 22.0 },
  "7750890050507": { id: 50, nombre: "Orion 1kg", precio: 6.50 },
  "7750890051511": { id: 51, nombre: "Orion 2kg", precio: 13.0 },
  "7750890052528": { id: 52, nombre: "Orion 4kg", precio: 25.0 },
  "7750128053534": { id: 53, nombre: "Chef 5L", precio: 39.5 },
  "7750128054541": { id: 54, nombre: "Cil 5L", precio: 44.0 },
  "7750128055558": { id: 55, nombre: "Capri 5L", precio: 55.0 },
  "7750128056565": { id: 56, nombre: "Primor 5L", precio: 54.0 },
  "7750128057572": { id: 57, nombre: "Cil 3L", precio: 26.0 },
  "7750000058582": { id: 58, nombre: "Super Fly", precio: 18.0 },
  "7750000059599": { id: 59, nombre: "R Pus", precio: 18.0 },
  "7750000060601": { id: 60, nombre: "Mr Plum", precio: 18.0 },
  "7501001061614": { id: 61, nombre: "Harpic", precio: 20.0 },
  "7750000062625": { id: 62, nombre: "Plop", precio: 18.0 },
  "7750128063632": { id: 63, nombre: "Bolivar frasco", precio: 9.0 }
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