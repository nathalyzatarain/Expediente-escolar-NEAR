import { PersistentUnorderedMap, logging, context, u128, ContractPromiseBatch } from 'near-sdk-as'

@nearBindgen
export class Estudiante {
  id: string;
  nombre: string;
  fechaNacimiento: string;
  edad: u32;
  email: string;
  telefono: string;
  nacionalidad: string;
  carrera: string;

  //Inicializamos el objeto
  constructor(id: string, nombre: string, fechaNacimiento: string, edad: u32, email: string, telefono: string, nacionalidad: string, carrera: string) {
    this.id = id;
    this.nombre = nombre;
    this.fechaNacimiento = fechaNacimiento;
    this.edad = edad;
    this.email = email;
    this.telefono = telefono; 
    this.nacionalidad = nacionalidad;
    this.carrera = carrera
  }
}

export const estudiantes = new PersistentUnorderedMap<string, Estudiante>("v");
