import "./App.css";


import { TituloyCantidad } from "./Componentes/Cantidad-Actividades"; 


function App() {
  return (
    <>
      <div className="flex justify-center p-6">
        <TituloyCantidad completado={10}  total={52} />
        <search/>


      </div>
    </>
  );
}

export default App;
