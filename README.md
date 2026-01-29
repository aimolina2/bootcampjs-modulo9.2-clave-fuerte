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
- **constants.ts** con las contraseñas y otrso parámetros que vamos a pasar a nuestro modelo para verificar las contraseñas.
- **main.ts** donde indicamos que debemos mostrar por `consola` el resultado.
- **password-validate.ts** con la _función principal_ que nos indica cómo validar la contraseña. Es a la que llamamos en el main.ts.
- **password-validate.helper.ts** _desglosamos las funciones_ a las que llamamos desde _password-validate.ts_. Paso a paso que nos ayuda a crear una función mayor.
- **password-validate.helper.spec.ts** donde realizamos _pruebas_ unitarias para asegurarnos de que las funciones se ejecutan sin errores.
