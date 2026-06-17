# TP Docker Compose - Monorepo Frontend + Backend

Ce projet contient un monorepo avec :

- un backend Node.js / Express ;
- un frontend React / Vite ;
- deux Dockerfiles multi-stage ;
- un docker-compose ;
- une pipeline GitHub Actions pour build, tag et push les images sur Docker Hub.

## Structure

```text
.
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   └── src/server.js
├── frontend/
│   ├── Dockerfile
│   ├── package.json
│   ├── nginx.conf
│   └── src/main.jsx
├── docker-compose.yml
└── .github/workflows/docker-pipeline.yml
```

## Lancer le projet en local

```bash
docker compose up --build -d
```

## Vérifier les containers

```bash
docker compose ps
```

## Accès

Frontend :

```text
http://localhost:8080
```

Backend :

```text
http://localhost:3000/api/message
```

Healthcheck backend :

```text
http://localhost:3000/api/health
```

## Arrêter le projet

```bash
docker compose down
```

## Images Docker créées en local

```text
tp-docker-frontend:1.0.0
tp-docker-backend:1.0.0
```

## Pipeline build + push + tag

Le fichier `.github/workflows/docker-pipeline.yml` construit et pousse les deux images vers Docker Hub.

Il faut créer deux secrets GitHub :

```text
DOCKERHUB_USERNAME
DOCKERHUB_TOKEN
```

La pipeline pousse :

```text
DOCKERHUB_USERNAME/tp-docker-backend:latest
DOCKERHUB_USERNAME/tp-docker-frontend:latest
```

Elle pousse aussi un tag basé sur le commit SHA.

Si un tag Git est créé, par exemple :

```bash
git tag v1.0.0
git push origin v1.0.0
```

Alors la pipeline pousse aussi :

```text
DOCKERHUB_USERNAME/tp-docker-backend:v1.0.0
DOCKERHUB_USERNAME/tp-docker-frontend:v1.0.0
```
