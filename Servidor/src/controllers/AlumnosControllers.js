//importamos el modelo
import AlumnosModel from "../models/AlumnosModel.js";

//** Metodos para el CRUD **/

//Mostrar todos los registros de alumnos
export const getAllAlumnos = async (req, res) => {
    try {
        const alumnos = await AlumnosModel.findAll()
        res.json(alumnos)
    } catch (error) {
        res.json({message: error.message})        
    }
}

