import { ValidacionClave } from "./model";

export const validarClave = (
  nombreUsuario: string,
  clave: string,
  commonPasswords: string[],
): ValidacionClave => {
  // ...

  return { esValida: true };
};
