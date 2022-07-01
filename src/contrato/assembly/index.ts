import { logging} from 'near-sdk-as'
import { Estudiante, estudiantes } from './data';

export function setEstudiante(nombre: string, fechaNacimiento: string, edad: u32, email: string, telefono: string, nacionalidad: string, carrera: string): void {

  let id = estudiantes.length;
  id += 1;

  //Validaciones
  assert(edad > 0, "Edad inválida.");
  assert(nombre.length >= 3, "El nombre debe contener 3 o más caractéres.");

 let estudiante = new Estudiante(id.toString(), nombre.toLowerCase(), fechaNacimiento.toLowerCase(), edad, email.toLowerCase(), telefono.toLowerCase(), nacionalidad.toLowerCase(), carrera.toLowerCase());
 estudiantes.set(id.toString(), estudiante);
 logging.log("Registro creado exitosamente.");

}

export function getEstudiantes(): Estudiante[] {
  
  return estudiantes.values();
  
}

export function getEstudiante(id: string): Estudiante | null {
  
  return estudiantes.get(id);

}

export function getEstudiantesByName(nombre: string ): Estudiante[] {
 
  let listEstudiantesResult: Estudiante[] = [];
  let listEstudiantes: Estudiante[] = estudiantes.values();
  let buscarNombre = nombre.toLowerCase();

  for(let i = 0; i < listEstudiantes.length; i++) {
    let nombreSplit = listEstudiantes[i].nombre.split(" ");

    if (nombreSplit[0] == buscarNombre) {
      listEstudiantesResult.push(listEstudiantes[i]);
    }

  }

  return listEstudiantesResult;
  
}

export function getEstudianteByCareer(carrera: string ):  Estudiante[] {
  
  let listEstudiantesCareer: Estudiante[] = [];
  let listEstudiantes: Estudiante[] = estudiantes.values();
  let buscarCarrera = carrera.toLowerCase();

  for(let i = 0; i < listEstudiantes.length; i++) {
    if (listEstudiantes[i].carrera == buscarCarrera) {
      listEstudiantesCareer.push(listEstudiantes[i]);
    }
  }

  return listEstudiantesCareer;
  
}

export function deleteEstudiante(id: string): void {
  estudiantes.delete(id);
}





