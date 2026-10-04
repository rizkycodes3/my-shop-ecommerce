# E-commerce

A frontend-only e-commerce demo application built with **ReactJS** and **TailwindCSS**. The project uses **DummyJSON** as the product API and is intended as a demonstration of building an e-commerce user interface and client-side application flow without a custom backend.

> **Project status:** Frontend demo / learning project  
> **Backend:** None  
> **Product API:** DummyJSON

---

## Overview

This project is an e-commerce application focused entirely on the frontend layer.

The application consumes product data from the [DummyJSON](https://dummyjson.com/) API and uses ReactJS to build the user interface and application logic. TailwindCSS is used for styling and responsive UI development.

Because this project does not include its own backend, product data and other API-dependent information come from the external DummyJSON service.

### Main goals

- Practice building an e-commerce application with ReactJS.
- Practice consuming data from a REST API.
- Build a reusable and responsive user interface with TailwindCSS.
- Practice managing frontend application state and user interactions.
- Demonstrate how a frontend application can work with an external API without implementing a custom backend.

---

## Tech Stack

| Technology | Purpose |
| --- | --- |
| **ReactJS** | Building the frontend application and UI components |
| **TailwindCSS** | Styling and responsive interface development |
| **DummyJSON** | Providing product data through an external API |

---

## Architecture

This project currently consists of a **frontend application only**.

```text
┌─────────────────────────────┐
│        ReactJS App          │
│                             │
│  UI / Components / Logic    │
└──────────────┬──────────────┘
               │
               │ HTTP Request
               ▼
┌─────────────────────────────┐
│          DummyJSON          │
│        Product API          │
└─────────────────────────────┘
```

There is no custom backend or database included in this project.

---

## API

Product data is provided by **DummyJSON**.

Official API:

- https://dummyjson.com/

The frontend communicates with the API to retrieve product information that is used by the application.

> **Note:** Because the application depends on an external API, some functionality may depend on the availability and behavior of the DummyJSON service.

---

## Project Structure

Illustration of the folder structure within a project:

```text
project-root/
├── src/
│   ├── assets/
│   ├── components/
│   ├── contexts/
│   └── ...
├── package.json
└── README.md
```
---

## Getting Started

### Prerequisites

Make sure your development environment has:

- Node.js
- npm, or another compatible JavaScript package manager

### Installation

Clone the repository and install the project's dependencies:

```bash
git clone https://github.com/rizkycodes3/my-shop-ecommerce.git
cd my-shop-ecommerce
npm install
```

### Run the project

Use the development command defined in the project's `package.json`:

```bash
npm run dev
```
---

## Features

There are several features in the project, namely:

- Product listing
- Product details
- Product search
- Product filtering
- Shopping cart
- Quantity management
- Checkout UI
- Responsive layout
- Loading states
- Error handling
---

## Development Focus

This project can be used as a practical exercise for learning and demonstrating frontend development concepts such as:

- React component architecture
- API consumption
- Asynchronous data fetching
- State management
- Event handling
- Client-side application logic
- Responsive UI development
- Utility-first CSS with TailwindCSS

---

## Limitations

This project is a frontend-only demo, so it does not currently provide a custom backend.

This means that:

- There is no custom server-side application included.
- There is no project-owned database documented here.
- Product data comes from DummyJSON.
- Backend-dependent functionality cannot be assumed to exist unless it is implemented elsewhere in the project.

---

## Disclaimer

This project is an **e-commerce demo application** and does not represent a production-ready e-commerce platform.

The project currently focuses on the frontend and uses DummyJSON as an external source of product data.


