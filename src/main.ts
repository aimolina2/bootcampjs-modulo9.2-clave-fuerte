import { validarClave } from "./password-validate";
import { commonPasswords } from "./constants";

const nombreUsuario: string = "usuarioEjemplo";
const clave: string = "ClaveSegura123!";

console.log(`Usuario: ${nombreUsuario}`);
console.log(`Password: ${clave}`);
console.log(validarClave(nombreUsuario, clave, commonPasswords));
