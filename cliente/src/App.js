import logo from './logo.svg';
import './App.css';
import Inicio from "./componentes/inicio.js";
import Alumnos from "./componentes/alumnos.js";
import Cursos from "./componentes/cursos.js";
import Talleres from "./componentes/talleres.js";
import Profesores from "./componentes/profesores.js";
import Asignaturas from "./componentes/asignaturas.js";
import { BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  return (    
    <div className="App">      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Inicio />} />
          <Route path='/alumnos' element={ <Alumnos />} />
          <Route path='/cursos' element={ <Cursos />} />
          <Route path='/talleres' element={ <Talleres />} />
          <Route path='/profesores' element={ <Profesores />} />
          <Route path='/asignaturas' element={ <Asignaturas />} />
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
