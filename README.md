# Prueba de Ingreso Desarrollador Fullstack con Enfoque en Backend - Master

# Contenido

- [Estructura de Carpetas](#estructura-de-carpetas)

- [01 - Consumo de APIs](#01---consumo-de-apis)
- [02 - Nomenclatura](#02---nomenclatura)
- [03 - Pensamiento lógico](#03---pensamiento-lógico)
- [04 - Modelado de bases de datos](#04---modelado-de-bases-de-datos)
- [05 - Arquitectura del backend](#05---arquitectura-del-backend)
- [06 - Nomenclatura](#06---nomenclatura)

## Estructura de Carpetas

### 01 - Consumo de APIs

En la documentación de github, se recomienda el uso del [SDK de Octokit.js][octokit].

> Si quieres escribir un script mediante JavaScript para interactuar con la API de REST de GitHub, GitHub recomienda usar el SDK de Octokit.js. GitHub mantiene Octokit.js. El SDK implementa los procedimientos recomendados y facilita la interacción con la API de REST a través de JavaScript. Octokit.js funciona con todos los exploradores modernos, Node.js y Deno.

Para ejecutar el proyecto seguir los pasos indicados en su [README.md](./01%20-%20Consumo%20de%20APIs/README.md)

### 02 - Nomenclatura

No recuerdo la fórmula de la función para así poder utilizar el nombre de las variables según tal ecucación, así que me basaré en que supone que contiene:

**_Original_**

```js
function f(x, y, z) {
  let a = x + y;
  let b = a * z;
  let c = Math.sin(b);
  return c;
}
```

**_Resultado_**

```js
function f(x, y, z) {
  let sumXY = x + y;
  let productSumAndZ = sumXY * z;
  let sinOfProductSumAndZ = Math.sin(productSumAndZ);
  return sinOfProductSumAndZ;
}
```

### 03 - Pensamiento lógico

Para ejecutar la función, seguir los pasos indicados en el [README.md](./03%20-%20Pensamiento%20lógico/README.md)

### 04 - Modelado de bases de datos

El modelo junto con el script SQL se encuentra en el [directorio](./04%20-%20Modelado%20de%20bases%20de%20datos/), comentarios en el [README.md](./04%20-%20Modelado%20de%20bases%20de%20datos/README.md) adjunto.

### 05 - Arquitectura del backend

El desarrollo de este punto se pude ver en el [README.md](./05%20-%20Arquitectura%20del%20backend/README.md)

### 06 - Nomenclatura

El desarrollo de este punto se pude ver en el [README.md](./06%20-%20Nomenclatura/README.md)

[dotenv]: https://www.npmjs.com/package/dotenv
[octokit]: https://docs.github.com/es/rest/guides/scripting-with-the-rest-api-and-javascript?apiVersion=2022-11-28
[npm-octokit]: https://www.npmjs.com/package/@octokit/rest
