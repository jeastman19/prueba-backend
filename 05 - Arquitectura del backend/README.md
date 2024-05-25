# Ejercicio 5: Arquitectura del backend

> Describe cómo estructurarías el backend de una aplicación de comercio electrónico. Habla sobre las tecnologías que utilizarías, la organización de los archivos, el uso de patrones de diseño, etc.

# Contenido

En lo general y que las condiciones lo permitan, prefiero desarrollar en Microservicios, haciéndo énfasis en la "S" de los principios SOLID, es decir, que cada uno de los microservicios tenga una única responsabiliad "Single Responsibility".

## Agrupación de Responsabilidadesd

Verenos una aproximación de cómo separar las responsabilidades del sistema en varios microservicios:

### Usuarios

Microservicio con las funcionalidades necesarias para la gestión de los usuario, este tendría tareas como:

1. Registro de usuario
1. Actualización de password
1. Actualización datos del perfil
1. Desactivación de un usuario (funcionalidad de administración)
1. Autenticación

### Productos

Microservicio que será el responsable de gestionar los datos de los productos

1. Registro de un nuevo producto
1. Actualización del costo del producto
1. Actualización del precio de venta de un producto
1. Actualización de la cantidad en existencia
1. Desactivar un producto (sacarlo de la vitrina)

### Carrito de Compra

Microservicio encargado de gestionar el carrito de compra:

1. Agregar producto al carrito
1. Sacar producto del carrito
1. Crear pedido con los productos en el carrito

### Correo electrónico

Se podría tener un microservicio responsable de los correos electrónico, la finalidad de esto:

1. Separación de responsabilidades
1. En caso de cambio de proveedor de correo electrónico, los cambios se harían en un solo microservicio
1. Utilización del patrón Event-Driven Architecture, para mejorar las prestaciones del sistema

**Observación**: Esta separación de responsabilidades es una aproximación, todo depende de los requisitos y recursos con los que se cuente.

## Comunicación entre Microservicios

En lo posible, utiizar colas de mensajes como RabbitMQ, AWS-SQS, por ejemplo, cuando el cliente crea un pedido a partir de los productos que tiene en el carrito, se puede enviar un mensaje a la cola de mensajes al que se suscribe el gestor de correo electrónico, con el fin, de que este útlimo envíe el correo sin que el microservicio de pedidos tenga que esperar a que el correo sea enviado.

## Organización de los archivos

Es recomendable utilizar un enfoque más orientado a la Arquitectura Limpia, donde los archivos se agrupan según la capa a la que pertenece, aislando así el código de cada capa:

```
src/
├── application/
│   ├── dtos/
│   ├── interfaces/
│   ├── services/
│   └── use-cases/
│── domain/
│   ├── entities/
│   ├── exceptions/
│   └── repository/
│── infrastructure/
    ├── database/
    ├── http/
    │   ├── controllers/
    │   ├── routes/
    │   └── server.ts
    └── config/

```

**Dónde**:

### Aplication:

Este directrorio contendrá la lólgica de la aplicación y coordina el flujo de datos entre el dominio y la infraestructura

### Domain:

En este directorio se contendrá la lógica del dominio junto a las reglas de negocio según cada caso en particular.

### Infrastructure

En este directorio estará todo el código necesario para que la aplicación interactúe con el mundo exterior: base de datos, sistemas de mensajerías, entre otros.
