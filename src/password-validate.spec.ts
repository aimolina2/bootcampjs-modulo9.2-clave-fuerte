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
  it("debería retornar esValida: false para una clave sin mayúsculas", () => {
    const nombreUsuario: string = "usuario01";
    const clave: string = "clavesegura123!";
    const validacion: ValidacionClave = validarClave(
      nombreUsuario,
      clave,
      commonPasswords,
    );
    const expected: ValidacionClave = {
      esValida: false,
      error: "La clave debe de tener mayúsculas y minúsculas",
    };

    expect(validacion).toEqual(expected);
  });
  it("debería retornar esValida: false para una clave sin números", () => {
    const nombreUsuario: string = "usuario01";
    const clave: string = "ClaveSeguraABC!";
    const validacion: ValidacionClave = validarClave(
      nombreUsuario,
      clave,
      commonPasswords,
    );
    const expected: ValidacionClave = {
      esValida: false,
      error: "La clave debe de tener números",
    };

    expect(validacion).toEqual(expected);
  });

  it("debería retornar esValida: false para una clave que contiene el nombre de usuario", () => {
    const nombreUsuario: string = "usuario01";
    const clave: string = "ClaveUsuario01SeguraABC!";
    const validacion: ValidacionClave = validarClave(
      nombreUsuario,
      clave,
      commonPasswords,
    );
    const expected: ValidacionClave = {
      esValida: false,
      error: "La clave no debe tener el nombre del usuario",
    };

    expect(validacion).toEqual(expected);
  });
});
