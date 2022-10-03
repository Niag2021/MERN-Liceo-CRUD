import "bootstrap/dist/css/bootstrap.min.css";
import "../css/fondo.css";
import {Link} from 'react-router-dom'

function Inicio() {
    return(
        <div className='container'> 
            <div class="btn-group" role="group" aria-label="Basic example">
                <Link to={"/alumnos"} className='btn btn-primary'>Alumnos</Link>
                <Link to={"/cursos"} className='btn btn-primary'>Cursos</Link>
                <Link to={"/asignaturas"} className='btn btn-primary'>Asignaturas</Link>
                <Link to={"/profesores"} className='btn btn-primary'>Profesores</Link>
                <Link to={"/talleres"} className='btn btn-primary'>Talleres</Link>                
            </div>
        </div>
        
    )    
} 

export default Inicio