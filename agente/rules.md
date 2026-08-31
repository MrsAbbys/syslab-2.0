# Reglas e Instrucciones del Agente - Arquitectura SysLab 2.0

## 1. Persistencia y Base de Datos
- Toda comunicación con PostgreSQL debe realizarse exclusivamente a través de Prisma ORM.
- Queda prohibida la ejecución de queries SQL directas sin pasar por el cliente tipado de Prisma.
- Las migraciones deben versionarse y aplicarse mediante `prisma migrate`.

## 2. Aislamiento y Redes
- Los servicios de Backend y Frontend deben operar en contenedores independientes orquestados por Docker Compose.
- Las conexiones entre contenedores deben utilizar los nombres de servicio (`db`, `backend`, `frontend`) como hostnames.

## 3. Gobernanza del Backend
- El backend debe respetar las variables de entorno definidas en `.env`.
- La carga de datos iniciales debe estar centralizada en el script de seed (`seed.js`).
