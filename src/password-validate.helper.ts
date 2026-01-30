import { MAYUSCULAS, MINUSCULAS, NUMEROS } from "./constants";
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
