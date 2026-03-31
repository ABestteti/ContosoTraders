# Contoso Traders E-Commerce Platform

A modern e-commerce platform built with .NET 9 API and React TypeScript frontend.

## Features

- **Product Catalog**: Browse electronics products with detailed information
- **RESTful API**: .NET 9 minimal API for product data
- **Responsive UI**: React TypeScript frontend with modern design
- **Automated Testing**: Unit tests for both API and UI components
- **CI/CD Pipeline**: GitHub Actions for automated builds, tests, and deployments

## Project Structure

```
src/
├── ContosoTraders.Api/          # .NET 9 Web API
├── ContosoTraders.Api.Tests/    # xUnit tests for API
└── contosotraders-ui-website/   # React TypeScript frontend
```

## API Endpoints

- `GET /api/products` - Returns list of products
- `GET /weatherforecast` - Sample weather forecast endpoint

## Getting Started

### Prerequisites

- .NET 9 SDK
- Node.js 18+
- npm or yarn

### Running the API

```bash
cd src/ContosoTraders.Api
dotnet run
```

API will be available at `https://localhost:5001`

### Running the UI

```bash
cd src/contosotraders-ui-website
npm install
npm start
```

UI will be available at `http://localhost:3000`

### Running Tests

```bash
# API Tests
cd src
dotnet test

# UI Tests
cd contosotraders-ui-website
npm test
```

## CI/CD

The project uses GitHub Actions for automated CI/CD:

- **Build & Test**: Runs on every push/PR to main/master
- **API Deployment**: Publishes API artifacts
- **UI Deployment**: Deploys React app to GitHub Pages

## Technologies Used

- **Backend**: .NET 9, ASP.NET Core Minimal API
- **Frontend**: React 18, TypeScript
- **Testing**: xUnit, Jest, React Testing Library
- **CI/CD**: GitHub Actions
- **Deployment**: GitHub Pages (UI), Azure-ready (API)