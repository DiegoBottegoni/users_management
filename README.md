# User Management API

## Descripción
Este proyecto es una API de gestión de usuarios construida con Node.js y MongoDB. Permite crear, actualizar, eliminar, autenticar y gestionar usuarios con diferentes roles (admin y usuario regular).
Aunque ya ofrece funcionalidades básicas, todavía hay un amplio margen para mejorar tanto la funcionalidad como la experiencia del usuario, adaptándose a las necesidades específicas de cada proyecto. Algunas posibles mejoras incluyen:

- **Validaciones más detalladas**: Verificar si el formato del correo electrónico es válido, o si la contraseña cumple con ciertos requisitos (longitd, caracteres, etc.), entre otros.
- **Manejo de errores**: Todavía podría implementarse un manejo de errores más robusto, para proporcionar realimentación más específica a los usuarios en caso de fallos.
- **Funciones**: Búsqueda y filtrado. Permitir a adeministradores buscar usuarios por nombre, correo o rol, no solo por id. Esto mejoraría ampliamente la usabilidad.
- **Recuperación de contraseña**: Agregar un flujo para que los usuarios puedan recuperar su contraseña en caso de olvidarla.
- **Roles y permisos adicionales**: Expandir el sistema de roles para incluir otros niveles de acceso o funcionalidades (por ejemplo, moderador, gestor, etc.).

## Tecnologías utilizadas
- **Node.js, Express, MongoDB, Mongoose, bcryptjs, jsonwebtoken**

## Características
- Registro de nuevos usuarios.
- Autenticación de usuarios.
- Acceso a todos los usuarios (solo para administradores).
- Actualización y eliminación de usuarios (solo para administradores).

## Instalación

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/tu_usuario/users_management.git
   
2. Navegar a la carpeta del proyecto:

   ```bash
   cd users_management

3. Instalar las dependencias:

   ```bash
   npm install
   
4. Crear un archivo .env en la raíz del proyecto y agregar tus variables de entorno. Por ejemplo:

   ```bash
   JWT_SECRET=tu_secreto_jwt
    MONGO_URI=tu_uri_mongodb

5. Iniciar el servidor:

   ```bash
   npm run dev
   
## Endpoints

- **POST /api/users**: Crear un nuevo usuario.
- **POST /api/users/login**: Iniciar sesión de un usuario.
- **GET /api/users**: Obtener todos los usuarios (solo admin).
- **GET /api/users/:id**: Obtener un usuario por ID (solo admin).
- **PUT /api/users/:id**: Actualizar un usuario (solo admin).
- **DELETE /api/users/:id**: Eliminar un usuario (solo admin).
