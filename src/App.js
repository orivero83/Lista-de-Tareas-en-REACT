import './App.css';
import ListaDeTareas from './Components/ListaDeTareas';
import fcCampLogo from './img/FCL.jpeg';


function App() {

  return (
    <div className="aplicacion-tareas">

      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo'
          src={fcCampLogo} alt='Logo freecodecamp'
        />
      </div>

      <div className="tareas-lista-principal">
        <h1>Mis tareas</h1>
        <ListaDeTareas />
        
      </div>

    </div>
  );
}

export default App;
