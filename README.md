# ClinicMate - Hospital Management System

ClinicMate is a comprehensive Hospital Management System designed to streamline clinic operations. It features a robust backend for data management and a modern, responsive frontend for user interaction.

## Tech Stack

**Frontend:**
- **Framework:** React (Vite)
- **Styling:** Tailwind CSS, Radix UI
- **State Management:** Redux Toolkit
- **Language:** JavaScript

**Backend:**
- **Runtime:** Node.js (Express)
- **Database:** MongoDB (Mongoose)
- **Authentication:** JWT, bcrypt

## Prerequisites

Before running the project, ensure you have the following installed:
- **Node.js**: Version **24.x** is required for the Frontend.
- **MongoDB**: Ensure a local instance is running or you have a connection string for a cloud instance.

## Getting Started

### 1. Backend Setup

The backend handles API requests and database interactions.

1.  Navigate to the backend directory:
    ```bash
    cd Backend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Configure environment variables:
    -   Copy `.env.example` to `.env`:
        ```bash
        cp .env.example .env
        # Windows Command Prompt: copy .env.example .env
        ```
    -   Update `.env` with your MongoDB URI and other settings.
4.  (Optional) Seed the database with initial data:
    ```bash
    node seed.js
    ```
5.  Start the server:
    ```bash
    npm run dev
    ```
    The server typically runs on `http://localhost:4000`.

### 2. Frontend Setup

The frontend provides the user interface for the application.

1.  Navigate to the frontend directory:
    ```bash
    cd ../Frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
4.  Open your browser and navigate to the URL shown (usually `http://localhost:5173`).

## Project Structure

-   `Backend/`: Contains the Express.js server, API routes, and database models.
-   `Frontend/`: Contains the React application, components, and pages.

## License

This project is licensed under the ISC License.
