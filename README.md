# Módulo 9 - Laboratorio 9.2 Clave fuerte

Para poder visualizar el contenido de este Laboratorio.

Pasos:

- Clonate el proyecto.
- Instala las dependencias con `npm install`.
- Ejecuta el sandbox con `npm run dev`.
- Abre el navegador en `http://localhost:5173/` (si ese puerto no te funciona, mira en la consola donde has hecho el build, puede que este ocupado y se haya abierto en otro puerto).

## Organización y primeros pasos

Para realizar este proyecto se han creado varios archivos con el fin de tener el código mucho más ordenado y facilitar su lectura o cambios en caso de ser necesario:

- **model.ts** con las `interface` que conforman nuestro modelo.
- **constants.ts** con las contraseñas y otros parámetros que vamos a pasar a nuestro modelo para verificar las contraseñas.
- **main.ts** donde indicamos que debemos mostrar por `consola` el resultado.
- **password-validate.ts** con la _función principal_ que nos indica cómo validar la contraseña. Es a la que llamamos en el main.ts.
- **password-validate.helper.ts** _desglosamos las funciones_ a las que llamamos desde _password-validate.ts_. Paso a paso que nos ayuda a crear una función mayor.
- **password-validate.helper.spec.ts** donde realizamos _pruebas_ unitarias para asegurarnos de que las funciones se ejecutan sin errores.

## 01. La clave debe tener mayúsculas y minúsculas

Todas las funciones "individuales" que nos ayudan a validar paso a paso las encontramos en el archivo **password-validate.helper.ts**. Para crear estas funciones de forma consistente y comprobando que funcionan correctamente, hacemos pruebas unitarias en **password-validate.helper.spec.ts**

En primer lugar creamos la función que permite identificar si la clave contiene mayúsculas y minúsculas.

En el archivo de **constants.ts** añadimos un array de _MAYUSCULAS_ y otro de _MINUSCULAS_, para asi poder pasar todas las mayusculas y minúsculas a la hora de hacer las comprobaciones. Si no deberíamos usar .upperCase y .lowerCase.

De esta manera unificamos todas las comprobaciones y si en un momento dado queremos incluir un simbolo o letra podemos hacerlo desde estos arrays que crearemos en este archivo de constantes.

Si la clave tiene mayúsculas y minúsculas nos devuelve un `esValida: true`, sino un `esValida: false` + `error: "La clave debe de tener mayúsculas y minúsculas"`

## 02. La clave debe tener números

Igual que hemos hecho antes, pero esta vez comprobamos que se están introduciendo números del 0 al 9. En el archivo de **constants.ts** añadimos un array de _NUMEROS_.

Si la clave tiene números nos devuelve un `esValida: true`, sino un `esValida: false` + `error: "La clave debe tener números"`

## 03. La clave debe tener caracteres especiales

En el archivo de **constants.ts** añadimos un array de _CARACTERES_ESPECIALES_.

Si la clave tiene estos caracteres especiales nos devuelve un `esValida: true`, sino un `esValida: false` + `error: "La clave debe de tener caracteres especiales"`

## 04. La clave debe tener 8 caracteres o más

En este caso lo que debemos hacer es usar el _.lenght_ para comprobar el número de caracteres.

Si la clave tiene 8 o más caracteres nos devuelve un `esValida: true`, sino un `esValida: false` + `error: "La clave debe de tener una longitud mínima de 8 caracteres"`

## 05. La clave no puede contener el nombre del usuario

Aqui pasaremos todos los caracteres a minúscula para comprobar que no coincide en ningun momento el nombre de usuario con la clave. Después con un _.include_ verificamos que no esté incluido en la contraseña-

Así, si la clave no contiene el nombre de usuari nos devuelve un `esValida: true`, sino un `esValida: false` + `error: "La clave no debe tener el nombre del usuario"`
