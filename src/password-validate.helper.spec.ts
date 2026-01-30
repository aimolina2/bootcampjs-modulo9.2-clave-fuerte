import { ValidacionClave } from "./model";
import {
  tieneMayusculasYMinusculas,
  tieneNumeros,
  tieneCaracteresEspeciales,
  tieneLongitudMinima,
  tieneNombreUsuario,
} from "./password-validate.helper";

// MAYÚSCULAS Y MINÚSCULAS

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

// NÚMEROS

describe("tieneNumeros", () => {
  it("debería retornar esValida: true si la clave tiene números", () => {
    const validacion: ValidacionClave = tieneNumeros("ClaveSegura123");
    const expected: ValidacionClave = { esValida: true };

    expect(validacion).toEqual(expected);
  });

  it("debería retornar esValida: false si la clave no tiene números", () => {
    const validacion: ValidacionClave = tieneNumeros("ClaveSeguraABC");
    const expected: ValidacionClave = {
      esValida: false,
      error: "La clave debe de tener números",
    };

    expect(validacion).toEqual(expected);
  });
});

// CARACTERES ESPECIALES

describe("tieneCaracteresEspeciales", () => {
  it("debería retornar esValida: true si la clave tiene caracteres especiales", () => {
    const validacion: ValidacionClave =
      tieneCaracteresEspeciales("ClaveSegura!*1");
    const expected: ValidacionClave = { esValida: true };

    expect(validacion).toEqual(expected);
  });

  it("debería retornar esValida: false si la clave no tiene caracteres especiales", () => {
    const validacion: ValidacionClave =
      tieneCaracteresEspeciales("ClaveSegura123");
    const expected: ValidacionClave = {
      esValida: false,
      error: "La clave debe de tener caracteres especiales",
    };

    expect(validacion).toEqual(expected);
  });
});

// LONGITUD MÍNIMA

describe("tieneLongitudMinima", () => {
  it("debería retornar esValida: true si la clave tiene una longitud mínima de 8 caracteres", () => {
    const validacion: ValidacionClave = tieneLongitudMinima("ClaveSegura123");
    const expected: ValidacionClave = { esValida: true };

    expect(validacion).toEqual(expected);
  });

  it("debería retornar esValida: false si la clave tiene una longitud de menos de 8 caracteres", () => {
    const validacion: ValidacionClave = tieneLongitudMinima("Clave3");
    const expected: ValidacionClave = {
      esValida: false,
      error: "La clave debe de tener una longitud mínima de 8 caracteres",
    };

    expect(validacion).toEqual(expected);
  });
});

// NOMBRE DE URUARIO DIFERENTE A LA CONTRASEÑA

describe("tieneNombreUsuario", () => {
  it("debería retornar esValida: true si la clave no contiene el nombre de usuario", () => {
    const validacion: ValidacionClave = tieneNombreUsuario(
      "usuario",
      "ClaveSegura123",
    );
    const expected: ValidacionClave = { esValida: true };

    expect(validacion).toEqual(expected);
  });

  it("debería retornar esValida: false si la clave contiene el nombre de usuario", () => {
    const validacion: ValidacionClave = tieneNombreUsuario(
      "usuario",
      "ClaveUsuario123",
    );
    const expected: ValidacionClave = {
      esValida: false,
      error: "La clave no debe tener el nombre del usuario",
    };

    expect(validacion).toEqual(expected);
  });
});
