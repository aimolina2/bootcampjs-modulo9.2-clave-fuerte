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
    ? passwordValida()
    : passwordNoValida("La clave debe de tener mayúsculas y minúsculas");
};

// NÚMEROS
export const tieneNumeros = (clave: string): ValidacionClave => {
  const passwordArray = clave.split("");
  const tieneNumero = passwordArray.some((caracter) =>
    NUMEROS.includes(caracter),
  );

  return tieneNumero
    ? passwordValida()
    : passwordNoValida("La clave debe de tener números");
};

// CARACTERES ESPECIALES
export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
  const passwordArray = clave.split("");
  const tieneCaracterEspecial = passwordArray.some((caracter) =>
    CARACTERES_ESPECIALES.includes(caracter),
  );

  return tieneCaracterEspecial
    ? passwordValida()
    : passwordNoValida("La clave debe de tener caracteres especiales");
};

// LONGITUD MINIMA (>=8)
export const tieneLongitudMinima = (clave: string): ValidacionClave => {
  return clave.length >= 8
    ? passwordValida()
    : passwordNoValida(
        "La clave debe de tener una longitud mínima de 8 caracteres",
      );
};

// NOMBRE DE USUARIO DIFERENTE A LA CONTRASEÑA

export const tieneNombreUsuario = (
  nombreUsuario: string,
  clave: string,
): ValidacionClave => {
  const passwordLowerCase = clave.toLowerCase();
  const usernameLowerCase = nombreUsuario.toLowerCase();

  return !passwordLowerCase.includes(usernameLowerCase)
    ? passwordValida()
    : passwordNoValida("La clave no debe tener el nombre del usuario");
};

// PALABRAS COMUNES

export const tienePalabrasComunes = (
  clave: string,
  commonPasswords: string[],
): ValidacionClave => {
  const passwordLowerCase = clave.toLowerCase();
  const contienePalabraComun = commonPasswords.some((palabra) =>
    passwordLowerCase.includes(palabra.toLowerCase()),
  );

  return !contienePalabraComun
    ? passwordValida()
    : passwordNoValida("La clave no debe de contener palabras comunes");
};

// Válido y no válido helpers

const passwordValida = () => {
  return { esValida: true };
};

const passwordNoValida = (notificacion: string) => {
  return { esValida: false, error: notificacion };
};
