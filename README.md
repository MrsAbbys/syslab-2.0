# Práctica: Despliegue Multi-Contenedor y Persistencia SysLab 2.0

**Materia:** Sistemas Paralelos  
**Docente:** Ing. Elias Cassal Baldiviezo  
**Estudiante:** Abigail Quispe  
**Año:** 2026  

---

## 📌 Descripción General
Implementación, configuración y orquestación de un entorno de desarrollo multi-contenedor basado en la arquitectura **SysLab 2.0**. El sistema integra servicios desacoplados para Backend, Frontend y Persistencia Relacional con PostgreSQL, gestionando el modelado de datos mediante Prisma ORM y la gobernanza del backend mediante directrices y skills para agentes de Inteligencia Artificial.

---

## 🏗️ Arquitectura del Sistema

| Servicio | Contenedor / Imagen | Puerto | Descripción Técnica |
| :--- | :--- | :--- | :--- |
| **Database** | syslab_db (postgres:15-alpine) | 5432:5432 | Servidor relacional PostgreSQL con volumen persistente. |
| **Backend** | syslab_backend (Node.js 18) | 4000:4000 | API estructurada con Prisma Client y migraciones. |
| **Frontend** | syslab_frontend (Node.js 18) | 3000:3000 | Entorno desacoplado en contenedor Docker. |
| **Agente** | TasteSkill & Rules Engine | N/A | Reglas SysLab 2.0 y gobernanza de persistencia. |

---

## 🚀 Guía de Despliegue y Ejecución

### 1. Clonar el Repositorio
```bash
git clone [https://github.com/MrsAbbys/syslab-2.0.git](https://github.com/MrsAbbys/syslab-2.0.git)
cd syslab-2.0
```

### 2. Orquestar y Levantar Contenedores
```bash
docker compose up --build -d
```

### 3. Aplicar Migraciones y Carga Inicial (Seed)
```bash
docker compose exec backend npx prisma migrate dev --name init
docker compose exec backend node prisma/seed.js
```

### 4. Monitoreo y Verificación
```bash
docker compose ps
docker compose exec backend npx prisma migrate status
```

---

## 📋 Convención de Control de Versiones
El proyecto implementa el estándar **Conventional Commits** en idioma español:
- feat(...): Nuevas funcionalidades, modelos de base de datos u orquestación.
- chore(...): Configuración de dependencias, scripts y módulos del agente.
- docs(...): Documentación técnica y actualización de guías.
- fix(...): Corrección de configuraciones o inconsistencias de ejecución.