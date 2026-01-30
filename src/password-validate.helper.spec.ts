import { ValidacionClave } from "./model";
import { tieneMayusculasYMinusculas } from "./password-validate.helper";

// Si la clave no tiene mayúsculas y minúsculas, el error será: "La clave debe de tener mayúsculas y minúsculas".

describe("tieneMayusculasYMinusculas", () => {
  it("debería retornar esValida: true si la clave tiene mayúsculas y minúsculas", () => {
    const validacion: ValidacionClave =
      tieneMayusculasYMinusculas("ClaveSegura123");
    const expected: ValidacionClave = { esValida: true };

    expect(validacion).toEqual(expected);
  });

  it("debería retornar esValida: false si la clave no tiene mayúsculas", () => {
    const validacion: ValidacionClave =
      tieneMayusculasYMinusculas("clavesegura123");
    const expected: ValidacionClave = {
      esValida: false,
      error: "La clave debe de tener mayúsculas y minúsculas",
    };

    expect(validacion).toEqual(expected);
  });

  it("debería retornar esValida: false si la clave no tiene minúsculas", () => {
    const validacion: ValidacionClave =
      tieneMayusculasYMinusculas("CLAVESEGURA123");
    const expected: ValidacionClave = {
      esValida: false,
      error: "La clave debe de tener mayúsculas y minúsculas",
    };

    expect(validacion).toEqual(expected);
  });
});

// export interface ValidacionClave {
//   esValida: boolean;
//   error?: string;
// }
