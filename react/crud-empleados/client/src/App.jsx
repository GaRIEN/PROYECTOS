import "./index.css";

function App() {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        
        
        
        <div className="px-6 py-4">
          
          <div className="font-bold text-xl mb-2">Título de la tarjeta</div>

          
          <p className="text-gray-700 text-base">
            Esta es una descripción de ejemplo para la tarjeta. Puedes cambiar
            este texto por cualquier cosa que desees.
          </p>
        </div>

        
        <div className="px-6 pt-4 pb-6">
          <button className="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Ver más
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
