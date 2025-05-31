# Task Management API
## Overview
A RESTful API built with **Spring Boot** that enables users to manage tasks with JWT authentication, deployed via Docker. The solution fulfills all core requirements and bonus features from the technical assessment.

## Key Features
✅ **Core Requirements**
- Task CRUD operations (Create, Read, Update, Delete)
- Filter tasks by status (Pending/Completed)
- Weekly completion percentage calculation

✅ **Bonus Features**
- JWT-based authentication
- Comprehensive unit tests (JUnit 5)
- Docker deployment with PostgreSQL
- Swagger API documentation

## Tech Stack
- **Backend**: Java 21, Spring Boot 3.5.0
- **Database**: H2 (dev)
- **Authentication**: JWT with Spring Security
- **Testing**: JUnit 5, Mockito
- **Containerization**: Docker, Docker Compose
- **API Docs**: SpringDoc OpenAPI 2.3.0

## Setup Instructions

### Local Development
1. **Prerequisites**:
   - Java 21
   - Maven 3.9+
   - Docker (optional)

2. **Run the application**:
   ```bash
   mvn spring-boot:run
