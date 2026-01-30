import { MAYUSCULAS, MINUSCULAS } from "./constants";
import { ValidacionClave } from "./model";

// Si la clave no tiene mayúsculas y minúsculas, el error será: "La clave debe de tener mayúsculas y minúsculas".
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
