import { ValidacionClave } from "./model";
import {
  tieneMayusculasYMinusculas,
  tieneNumeros,
  tieneLongitudMinima,
  tieneCaracteresEspeciales,
  tieneNombreUsuario,
  tienePalabrasComunes,
} from "./password-validate.helper";

export const validarClave = (
  nombreUsuario: string,
  clave: string,
  commonPasswords: string[],
): ValidacionClave => {
  let claveParaValidar: ValidacionClave = { esValida: false };

  claveParaValidar = tieneMayusculasYMinusculas(clave);
  if (claveParaValidar.esValida === true) {
    claveParaValidar = tieneNumeros(clave);
  }

  if (claveParaValidar.esValida === true) {
    claveParaValidar = tieneCaracteresEspeciales(clave);
  }

  if (claveParaValidar.esValida === true) {
    claveParaValidar = tieneLongitudMinima(clave);
  }

  if (claveParaValidar.esValida === true) {
    claveParaValidar = tieneNombreUsuario(nombreUsuario, clave);
  }

  if (claveParaValidar.esValida === true) {
    claveParaValidar = tienePalabrasComunes(clave, commonPasswords);
  }

  return claveParaValidar;
};
