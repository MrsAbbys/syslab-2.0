# 🚀 Proyecto de Sistemas Paralelos — SysLab 2.0

> **Integrantes del Grupo:**
> * Abigail Quispe
>
> **Docente:** Ing. Elias Cassal Baldiviezo  
> **Materia:** Sistemas Paralelos  
> **Arquitectura Base:** SysLab 2.0  

---

## 📌 1. Descripción del Proyecto

El presente proyecto implementa un entorno de desarrollo multi-contenedor basado en la arquitectura **SysLab 2.0** para la materia de Sistemas Paralelos. Su objetivo principal es desplegar una infraestructura desacoplada y reproducible que resuelva la concurrencia, el aislamiento de procesos y la persistencia de datos mediante contenedores Docker. Integra una capa de persistencia fuertemente tipada con PostgreSQL y Prisma ORM, junto con un módulo de gobernanza y directrices para agentes de Inteligencia Artificial.

---

## 🛠️ 2. Arquitectura de Tecnologías (SysLab 2.0)

El proyecto está diseñado sobre la arquitectura **SysLab 2.0**, distribuyendo responsabilidades en tres capas principales orquestadas mediante contenedores Docker:

* **Frontend:** React / Node.js — Interfaz de usuario responsiva ejecutada en un contenedor desacoplado (Puerto 3000).
* **Backend:** Node.js — API RESTful y servidor de aplicaciones encargado de la lógica del sistema (Puerto 4000).
* **Persistencia / Base de Datos:** PostgreSQL 15 con **Prisma ORM** como mapeador objeto-relacional, control de esquemas y migraciones automáticas (Puerto 5432).
* **Agente de IA:** Reglas (`rules.md`) e integración de habilidades (`skills`) personalizadas alineadas a las directrices de [TasteSkill](https://www.tasteskill.dev/).

---

## 📁 3. Estructura del Repositorio

```text
.
├── agente/                 # Skills e instrucciones del agente de IA
│   ├── skills/             # Skills importadas de TasteSkill y custom SysLab 2.0
│   │   ├── backend/
│   │   │   └── syslab_persistence.json
│   │   └── tasteskill/
│   │       └── prisma_agent.json
│   └── rules.md            # Reglas de comportamiento del agente
├── backend/                # Código fuente del Backend
│   ├── prisma/             # Configuración de persistencia
│   │   ├── migrations/     # Historial de migraciones SQL
│   │   ├── schema.prisma   # Modelo de datos Prisma
│   │   └── seed.js         # Script de datos iniciales
│   ├── .env                # Variables de entorno del backend
│   ├── Dockerfile          # Imagen Docker del Backend
│   └── package.json
├── frontend/               # Código fuente del Frontend
│   ├── Dockerfile          # Imagen Docker del Frontend
│   └── package.json
├── docker-compose.yml      # Orquestación de contenedores (Frontend, Backend, DB)
└── README.md               # Documentación general del proyecto
```

---

## 🚀 4. Guía de Ejecución y Despliegue

### 1. Clonar el Repositorio
```bash
git clone https://github.com/MrsAbbys/syslab-2.0.git
cd syslab-2.0
```

### 2. Construir y Levantar el Entorno Multi-Contenedor
```bash
docker compose up --build -d
```

### 3. Aplicar Migraciones y Carga Inicial (Seed)
```bash
# Aplicar migraciones en PostgreSQL
docker compose exec backend npx prisma migrate dev --name init

# Ejecutar el script de poblado de datos
docker compose exec backend node prisma/seed.js
```

### 4. Verificación de Servicios
```bash
# Comprobar estado de los contenedores
docker compose ps

# Verificar sincronización del esquema en PostgreSQL
docker compose exec backend npx prisma migrate status
```