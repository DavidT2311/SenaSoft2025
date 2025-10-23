# Sistema de Compra para tiquetes Aéreos – Arquitectura Docker (React + FastAPI + PostgreSQL)

Este proyecto implementa un sistema base para la gestión de compras de tiquetes de aeropuerto, utilizando **React** para el frontend, **FastAPI** con **Clean Architecture** en el backend y **PostgreSQL** como base de datos.  
Todo está orquestado mediante **Docker Compose**, lo que permite levantar el entorno completo con un solo comando.

----------------------------------------------------------------------------

## Estructura del Proyecto

SenaSoft2025/
│
├── frontend/ # Aplicación web en React
│ ├── src/
│ ├── package.json
│ └── Dockerfile
│
├── backend/ # API en FastAPI (Clean Architecture)
│ ├── app/
│ │ ├── core/ # Configuración principal
│ │ ├── domain/ # Entidades y modelos de negocio
│ │ ├── application/ # Casos de uso
│ │ ├── infrastructure/ # Adaptadores (DB, repositorios)
│ │ └── presentation/ # Rutas y controladores FastAPI
│ ├── create_tables.py
│ ├── Dockerfile
│ └── requirements.txt
│
├── Documents/ # Documentación técnica y funcional
│ ├── README.md
│ ├── mockup / # Diseño base del proyecto
│ ├── arquitectura.png
│ |__ modelo_relacional.png
│ 
│
├── docker-compose.yml
├── .env
└── README.md

----------------------------------------------------------------------------

##  Configuración de Variables de Entorno (.env)

```env
# PostgreSQL
DB_USER=postgres
DB_PASSWORD=12345
DB_NAME=SenaSoftDB
DB_HOST=db
DB_PORT=5432

# Backend
BACKEND_PORT=8000

----------------------------------------------------------------------------

# Frontend
FRONTEND_PORT=3030
Despliegue con Docker Compose
1. Construir los contenedores

docker-compose build

2. Levantar los servicios
docker-compose up

3. Detener los servicios
docker-compose down

----------------------------------------------------------------------------

El backend se conectará automáticamente a la base de datos PostgreSQL y ejecutará los scripts iniciales definidos en db.sql

Clean Architecture (Backend)
El backend está basado en los principios de Clean Architecture.
Esto garantiza un código desacoplado, fácil de mantener y escalar.

Capas principales:

Capa	                        Descripción
Domain	                        Entidades de negocio puras. Sin dependencias externas.
Application	                    Lógica de negocio.
Infrastructure	                Acceso a base de datos.
Presentation	                Controladores, rutas y serialización de respuestas.

----------------------------------------------------------------------------

Tecnologías Principales

Componente	    Tecnología
Frontend	    Vite + React + Axios
Backend	        FastAPI + Python 3.11
Base de datos	PostgreSQL 15
Contenedores	Docker & Docker Compose
ORM	SQLAlchemy

----------------------------------------------------------------------------

Autores
Proyecto desarrollado como parte de SENASOFT 2025 – Categoría Desarrollo Libre.
Integrantes del equipo:

Johan – Arquitectura Backend (FastAPI, Docker)

Miguel  – Frontend / Documentación (Vite + React)
