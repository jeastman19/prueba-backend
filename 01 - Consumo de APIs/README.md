# Ejercicio 1: Consumo de APIs

## Requisitos

**Node js version**: 19.20.2
**Token de github**:

El token de github puede ser generador en:

**URL**: https://github.com/settings/personal-access-tokens/new

## Uso

### Crear las variables de entorno

Una vez se tiene el token de github copiar el archivo **_env.example_** en **_.env_**

```sh
cp env.example .env
```

Luego reemplazar los valores en **_.env_**

```sh
GITHUB_TOKEN="<su token>"
GITHUB_ORG=google
```

### Instalar los paquetes

```sh
npm i
```

### Ejecutar el proyecto

```sh
npm run dev
```

esto mostrará en la terminal un resultado similar a este

```ts
[
  {
    html_url: "https://github.com/google/dagger",
    stargazers_count: 17328,
  },
  {
    html_url: "https://github.com/google/traceur-compiler",
    stargazers_count: 8175,
  },
  {
    html_url: "https://github.com/google/ios-webkit-debug-proxy",
    stargazers_count: 5878,
  },
  {
    html_url: "https://github.com/google/truth",
    stargazers_count: 2701,
  },
  {
    html_url: "https://github.com/google/tracing-framework",
    stargazers_count: 2651,
  },
  {
    html_url: "https://github.com/google/namebench",
    stargazers_count: 888,
  },
  {
    html_url: "https://github.com/google/module-server",
    stargazers_count: 568,
  },
  {
    html_url: "https://github.com/google/google.github.io",
    stargazers_count: 430,
  },
  {
    html_url: "https://github.com/google/cpp-netlib",
    stargazers_count: 344,
  },
  {
    html_url: "https://github.com/google/vector_math.dart",
    stargazers_count: 303,
  },
];
```

**_Observaciones_**: Todas las pruebas están realizadas sobre plataforma GNU/Linux
