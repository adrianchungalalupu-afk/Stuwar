import { useEffect, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import './App.css';

const productosBD = {
  "7751851014823": { id: 1, nombre: "Dento de 150 con cepillo", precio: 6.5 },
  "7750243080132": { id: 2, nombre: "Jabón líquido Aval", precio: 6.0 },
  "8904158703689": { id: 3, nombre: "Talco chiquilin", precio: 12.0 },
  "7791293022567": { id: 4, nombre: "Desodorante Rexona", precio: 15.0 },
  "7509546076478": { id: 5, nombre: "Desodorante Lady Speed", precio: 14.0 },
  "7702010420344": { id: 6, nombre: "Jabón Protex fresh", precio: 4.0 },
  "7708872634011": { id: 7, nombre: "Jabón Moncler blanco", precio: 5.0 },
  "7702031245285": { id: 8, nombre: "Jabón Neko", precio: 4.0 },
  "7702538121501": { id: 9, nombre: "Jabón Heno de Pravia", precio: 5.5 },
  "7754031000357": { id: 10, nombre: "Jabón líquido Orion", precio: 5.0 },
  "7702006302036": { id: 11, nombre: "Savital frasco anticaspa", precio: 13.50 },
  "7702354957575": { id: 12, nombre: "Nutrivela frasco", precio: 15.00 },
  "7791293030890": { id: 13, nombre: "Sedal frasco zero caspa", precio: 13.50 },
  "7501001164645": { id: 14, nombre: "Pantene de 400ml", precio: 19.0 },
  "7501001170080": { id: 15, nombre: "Pantene acondicionador", precio: 19.0 },
  "7500435138000": { id: 16, nombre: "H y s de 375ml purificacion capilar", precio: 18.0 },
  "7500435019811": { id: 17, nombre: "H y s de 180ml suave y manejable", precio: 10.0 },
  "7506195148686": { id: 18, nombre: "H y s de 90ml limpieza renovadora", precio: 5.0 },
  "7506876788778": { id: 19, nombre: "Pantene de 100ml", precio: 5.0 },
  "7804920007186": { id: 20, nombre: "Ballerina frasco", precio: 11.0 },
  "7804920018779": { id: 21, nombre: "Ballerina cojin", precio: 10.0 },
  "7750128022223": { id: 22, nombre: "Amen cojin", precio: 22.0 },
  "7750128023230": { id: 23, nombre: "Amen acondicionador", precio: 18.0 },
  "7702024224525": { id: 24, nombre: "Milo lata", precio: 22.0 },
  "8445292127240": { id: 25, nombre: "Eco lata", precio: 14.0 },
  "7891000435793": { id: 26, nombre: "Kirma lata", precio: 24.0 },
  "7750890027271": { id: 27, nombre: "Orion 5kg balde", precio: 33.00 },
  "7750890028288": { id: 28, nombre: "Orion 5kg", precio: 28.50 },
  "7750128029298": { id: 29, nombre: "Patito 1kg", precio: 5.50 },
  "7750128030300": { id: 30, nombre: "Trome 1kg", precio: 5.0 },
  "7501001131317": { id: 31, nombre: "Ariel 720g", precio: 9.0 },
  "7750128032328": { id: 32, nombre: "Marsella 730g", precio: 7.0 },
  "7750128033335": { id: 33, nombre: "Bolivar 730g", precio: 9.0 },
  "7750463004406": { id: 34, nombre: "Altomayo frasco", precio: 30.0 },
  "7750463005212": { id: 35, nombre: "Altomayo 90g", precio: 18.0 },
  "7750463036363": { id: 36, nombre: "Altomayo 45g", precio: 9.0 },
  "7750000037372": { id: 37, nombre: "Tuinies 1L", precio: 28.0 },
  "7750000038389": { id: 38, nombre: "Tuinies 500ml", precio: 15.0 },
  "7750000039396": { id: 39, nombre: "Pañitos humedos grande", precio: 6.5 },
  "7750000040408": { id: 40, nombre: "Pañitos humedos mediano", precio: 5.0 },
  "7750000041415": { id: 41, nombre: "Pañitos humedos", precio: 2.0 },
  "7801800100012": { id: 42, nombre: "Durazno Aconcagua", precio: 10.0 },
  "7751158046299": { id: 43, nombre: "Durazno Compas", precio: 10.0 },
  "7702007086072": { id: 44, nombre: "Chocolisto", precio: 12.5 },
  "7750885021869": { id: 45, nombre: "Mermelada Deli 950g", precio: 13.0 },
  "7750885021876": { id: 46, nombre: "Mermelada Deli 290g", precio: 5.0 },
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
  "7750243084345": { id: 63, nombre: "Bolivar frasco plus", precio: 9.0 },
  "7750243083034": { id: 64, nombre: "Bolivar frasco cuidado total", precio: 9.0 },
  "7750243084338": { id: 65, nombre: "Bolivar frasco bebe", precio: 9.0 },
  "7702025120192": { id: 66, nombre: "Ducales", precio: 6.0 },
  "7752748011222": { id: 67, nombre: "Cobertura Winters", precio: 13.5 },
  "7702010420337": { id: 68, nombre: "Jabón Protex avena", precio: 4.0 },
  "7702010420382": { id: 69, nombre: "Jabón Protex herbal", precio: 4.0 },
  "7708872634295": { id: 70, nombre: "Jabón Moncler nutri-care", precio: 5.0 },
  "7708872634035": { id: 71, nombre: "Jabón Moncler amarillo", precio: 5.0 },
  "7791293046402": { id: 72, nombre: "Sedal frasco colageno", precio: 13.50 },
  "7506306237315": { id: 73, nombre: "Sedal frasco ceramidas", precio: 13.50 },
  "7506306237971": { id: 74, nombre: "Sedal frasco zero caspa", precio: 13.50 },
  "7702191522295": { id: 75, nombre: "Savital frasco crecimiento", precio: 13.50 },
  "7500435019828": { id: 76, nombre: "H y s de 375ml suave y manejable", precio: 18.0 },
  "7500435019958": { id: 77, nombre: "H y s de 180ml limpieza renovadora", precio: 10.0 },
  "7500435138017": { id: 78, nombre: "H y s de 180ml purificacion capilar", precio: 10.0 },
  "7506339326468": { id: 18, nombre: "H y s de 90ml men", precio: 5.0 },
  "7500435258425": { id: 18, nombre: "H y s de 90ml anti-caida", precio: 5.0 },
  "7500435257084": { id: 18, nombre: "H y s de 90ml anti-comezon", precio: 5.0 },

};

function App() {
  const [lista, setLista] = useState([]);
  const [ultimo, setUltimo] = useState(null);

  useEffect(() => {
    let ultimoCodigo = "";
    let tiempoLectura = 0;

    const scanner = new Html5QrcodeScanner("reader", {
      fps: 10,
      qrbox: { width: 250, height: 150 }
    });

    scanner.render((codigo) => {
      const ahora = Date.now();
      if (codigo === ultimoCodigo && ahora - tiempoLectura < 2000) return;
      
      ultimoCodigo = codigo;
      tiempoLectura = ahora;

      if (productosBD[codigo]) {
        const prod = productosBD[codigo];
        setUltimo(prod);
        setLista(prev => [...prev, { ...prod, idUnico: Date.now() }]);
      } else {
        setUltimo({ nombre: `No registrado (${codigo})`, precio: 0 });
      }
    });

    return () => {
      scanner.clear().catch(err => console.error(err));
    };
  }, []);

  const total = lista.reduce((acc, item) => acc + item.precio, 0);

  // Función para borrar un producto específico por su idUnico
  const eliminarProducto = (idUnico) => {
    setLista(prev => prev.filter(item => item.idUnico !== idUnico));
  };

  const limpiarLista = () => {
    setLista([]);
    setUltimo(null);
  };

  return (
    <div id="center" style={{ padding: '10px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Escáner y Lista de Precios</h2>
      
      <div id="reader" style={{ width: '100%' }}></div>

      {ultimo && (
        <div style={{ textAlign: 'center', margin: '10px 0', padding: '10px', background: '#f0f0f0', borderRadius: '8px' }}>
          <small>Último escaneado:</small>
          <p style={{ margin: '2px 0', fontWeight: 'bold' }}>{ultimo.nombre}</p>
          <span style={{ color: 'green', fontSize: '1.2rem' }}>S/ {ultimo.precio.toFixed(2)}</span>
        </div>
      )}

      <div style={{ width: '100%', marginTop: '15px' }}>
        <h3>Productos ({lista.length})</h3>
        <ul style={{ listStyle: 'none', padding: 0, maxHeight: '180px', overflowY: 'auto' }}>
          {lista.map(item => (
            <li key={item.idUnico} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 0', borderBottom: '1px solid #ccc' }}>
              <span>{item.nombre}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <strong>S/ {item.precio.toFixed(2)}</strong>
                <button 
                  onClick={() => eliminarProducto(item.idUnico)}
                  style={{ backgroundColor: '#ff4d4d', color: 'white', border: 'none', borderRadius: '4px', padding: '2px 8px', cursor: 'pointer', fontWeight: 'bold' }}
                >
                  ✕
                </button>
              </div>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px', borderTop: '2px solid #333', paddingTop: '10px' }}>
          <h3>Total:</h3>
          <h2 style={{ color: 'var(--accent)', margin: 0 }}>S/ {total.toFixed(2)}</h2>
        </div>

        {lista.length > 0 && (
          <button 
            onClick={limpiarLista} 
            style={{ marginTop: '10px', width: '100%', padding: '10px', backgroundColor: '#e74c3c', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          >
            Nueva Cuenta / Limpiar Todo
          </button>
        )}
      </div>
    </div>
  );
}

export default App;