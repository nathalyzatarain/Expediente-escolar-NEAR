import { ONE_NEAR } from "../../utils";
import * as contrato from "../assembly";
import { estudiantes } from "../assembly/data";
import { VMContext } from "near-sdk-as";

const NOMBRE = "Frank Estrada";
const EDAD = 18;
const FECHA_NACIMIENTO = "13 03 1994" 
const EMAIL = "frank@grupobizopps.com"
const TELEFONO = "6691017155"
const NACIONALIDAD = "mexico"
const CARRERA = "informatica"

const setContext = (): void => {
  //Variables del contexto
  VMContext.setAttached_deposit(ONE_NEAR);
  VMContext.setSigner_account_id("estudiante");
};

describe("SetEstudiante", () => {
  it("Registra un estudiante con sus respectivos datos.", () => {

    setContext();

    contrato.setEstudiante(NOMBRE,FECHA_NACIMIENTO, EDAD,EMAIL,TELEFONO,NACIONALIDAD,CARRERA);

    const e = estudiantes.get("estudiante");

    if (e) {
      expect(e.nombre).toBe(NOMBRE);
      expect(e.fechaNacimiento).toBe(FECHA_NACIMIENTO);
      expect(e.edad).toBe(EDAD);
      expect(e.email).toBe(EMAIL);
      expect(e.telefono).toBe(TELEFONO);
      expect(e.nacionalidad).toBe(NACIONALIDAD);
      expect(e.carrera).toBe(CARRERA);
    }

  });

  it("Requiere que la edad sea mayor a 0.", () => {
    setContext();
    expect(() => {
      contrato.setEstudiante(NOMBRE,FECHA_NACIMIENTO, 0,EMAIL,TELEFONO,NACIONALIDAD,CARRERA);
    }).toThrow("Edad inválida.");
  })

  
  it("Requiere que el nombre sea mayor a 3 caracteres.", () => {
    setContext();
    expect(() => {
      contrato.setEstudiante("p",FECHA_NACIMIENTO,EDAD,EMAIL,TELEFONO,NACIONALIDAD,CARRERA);
    }).toThrow("Nombre invalido inválida.");
  })
});
