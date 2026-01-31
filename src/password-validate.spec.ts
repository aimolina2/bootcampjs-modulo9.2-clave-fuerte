import { validarClave } from "./password-validate";
import { commonPasswords } from "./constants";
import { ValidacionClave } from "./model";

describe("validarClave", () => {
  it("debería retornar esValida: true para una clave válida", () => {
    const nombreUsuario: string = "usuarioEjemplo";
    const clave: string = "ClaveSegura123!";
    const validacion: ValidacionClave = validarClave(
      nombreUsuario,
      clave,
      commonPasswords,
    );
    const expected: ValidacionClave = { esValida: true };

    expect(validacion).toEqual(expected);
  });
});
