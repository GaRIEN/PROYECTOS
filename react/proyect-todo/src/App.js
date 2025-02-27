import './App.css';
import { CantidadTodo } from './Componentes/Cantidad-todo';
import { Buscar } from './Componentes/Buscar';
import { ListaActividades } from './Componentes/ListaActividades';
import { BotonAnadir } from './Componentes/BotonAnadir';

function App() {
  return (
    <div className="App">
      <CantidadTodo/>
      <Buscar/>
      <ListaActividades/>
      <BotonAnadir/>
    </div>
  );
}

export default App;
