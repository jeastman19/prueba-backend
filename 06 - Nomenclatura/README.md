# Documento de Políticas de Nomeclarutra para el Equipo de Desarrollo

**Autor**: Jorge Eastman
**Fecha**: mayo 24, 2024
**Versión**: 0.1.0

En este documento se estrablece un conjunto de políticas de nomenclatura para el equipo de desarrollo de **Master**

# Contenido

# 1. Base de Datos

## 1.1. Tablas

- El nombre de las tablas debe estar formado por caracteres del idioma inglés
- Todos los caracteres deben ser minúsculas
- Cuando el nombre está formado por más de una palabra, estas se deben separar por el signo de guión bajo: **_ordenes_de_compra_**

## 1.2. Columnas

- Utilizar minúsculas
- Separación con guión bajo
- Solo caracterés del alfabeto inglés

## 1.3. Índices

- Formar el nombre el índice, utilizando el nombre de la tabla como prefijo y como sufijo, según el caso:
  - Índice único **_\_uix_**
  - Índice no único **_\_idx_**

**Nota**: la "x" será un número correlativo según: 1, para el primero 2 para el segundo y así

## 1.4. Relaciones

- <nombre tabla>_<nombre tabla referida>_<campor referido>\_FK
  - Ejemplo: ordenes_productos_id_FK

# 2. Variables

## 2.1. Variables Globales

- No usar variables globales

## 2.2. Variables Locales

- Cuando el nombre de la variable es una sola palabras, todas las letras deberán ser minúscolas
  - Ejemplo: **edad**
- Cuando el nombre de la variable esté formada por más de una palabra, se empleará el formato camelCase
  - Ejemplo: **cantidadDeRegistros**

## 2.3. Constantes

- El nombre de las constantes debe ser totalmente en mayúscula y separado por guión bajo cuando está formado por más de una palabra:
  - Ejemplo: DIAS_DEL_MES = 30

# 3. Funciones

## 3.1. Las funciones generales y los métodos

- El nombre de las funciones debe ser descriptivo y sin refrencia al tipo de datos que recibe o retorna
- El nombre de la funciones debe ser en minúsculas cuando está formado por una sola palabra
  - Ejemplo: **sumar**
- El nombre de las funciones debe ser en camelCase cuando está formado por más de una palabra
  - Ejemplo: **sumarValoresDelArreglo**

# 4. Clases

## 4.1 Clases de Entidades

- El nombre de las clases debe ser en PascalCase y en singular

## 4.2. Clases de Servicio

- El nombre debe ser en PascalCase y sufijo "Service"
  - Ejemplo: **UserService**

## 4.3. Clases de Controladores

- El nombre de las clases de los controladores deben ser en PascalCase y son sufijo **Controller**
  - Ejemplo: **UserController**

# 5. Git

## 5.1. Branch

Se recomienda un total de tres branch como se indica

### 5.1.1. Main

- El nombre será en minúsculas **main**
- Será la rama que se publicará en el torno de producción
- No se permite hacer push directamente a esta rama
- Todos los cambios serán vía merge request desde la rama "release"

### 5.1.2. Release

- El nombre será en minúsculas **release**
- Será la rama que se publicará en el torno de QA

* No se permite hacer push directamente a esta rama
* Todos los cambios serán vía merge request desde la rama "dev"

### 5.1.3. Dev

- El nombre será en minúsculas **dev**
- Será la rama que se publicará en el torno de Dev para permitir a los desarrolladores realizar las pruebas de todos los cambios que están realizando antes de enviar a QA

* No se permite hacer push directamente a esta rama
* Todos los cambios serán vía merge request desde las ramas de trabajo de los desarrolladores

## 5.2. Commits

- Los mensajes deberán ser en ingles en tiempo presente
  - Ejemplo: **_Add user login functionality_**

## 5.3. Tags

- Nombres en minúsculas, separado por puntos
  - Ejemplo: **_v1.1.12_**
