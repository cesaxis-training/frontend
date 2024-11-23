# Quote Management Frontend

A web-based interface for managing quotes, built with HTML, CSS, and JavaScript.

## Overview

This frontend application provides a user interface for performing CRUD (Create, Read, Update, Delete) operations on quotes. It communicates with a backend API to manage quote data.

## Features

- View all quotes
- Create new quotes
- Edit existing quotes
- Delete quotes
- Docker containerization
- CI/CD pipelines with GitHub Actions

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- Docker Compose for development and deployment

## Project Structure

```
frontend/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── Dockerfile
├── docker-compose.yml
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── cd.yml
├── README.md
```

## Development

1. Clone the repository

```bash
git clone git@github.com:cesaxis-training/frontend.git
cd frontend
```

2. Use Docker Compose for development:

```bash
docker compose up -d
```

## Contributing

1. Create a new branch
2. Make your changes
3. Submit a Pull Request

The CI/CD pipelines will automatically run tests and deploy approved changes.
