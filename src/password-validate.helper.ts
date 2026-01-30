import {
  MAYUSCULAS,
  MINUSCULAS,
  NUMEROS,
  CARACTERES_ESPECIALES,
} from "./constants";
import { ValidacionClave } from "./model";

// MAYUSCULAS y MINUSCULAS
export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
  const passwordArray = clave.split("");
  const tieneMayusculas = passwordArray.some((caracter) =>
    MAYUSCULAS.includes(caracter),
  );
  const tieneMinusculas = passwordArray.some((caracter) =>
    MINUSCULAS.includes(caracter),
  );

  return tieneMayusculas && tieneMinusculas
    ? { esValida: true }
    : {
        esValida: false,
        error: "La clave debe de tener mayúsculas y minúsculas",
      };
};

// NÚMEROS
export const tieneNumeros = (clave: string): ValidacionClave => {
  const passwordArray = clave.split("");
  const tieneNumero = passwordArray.some((caracter) =>
    NUMEROS.includes(caracter),
  );

  return tieneNumero
    ? { esValida: true }
    : { esValida: false, error: "La clave debe de tener números" };
};

// CARACTERES ESPECIALES
export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
  const passwordArray = clave.split("");
  const tieneCaracterEspecial = passwordArray.some((caracter) =>
    CARACTERES_ESPECIALES.includes(caracter),
  );

  return tieneCaracterEspecial
    ? { esValida: true }
    : {
        esValida: false,
        error: "La clave debe de tener caracteres especiales",
      };
};

// LONGITUD MINIMA (>=8)
export const tieneLongitudMinima = (clave: string): ValidacionClave => {
  return clave.length >= 8
    ? { esValida: true }
    : {
        esValida: false,
        error: "La clave debe de tener una longitud mínima de 8 caracteres",
      };
};
