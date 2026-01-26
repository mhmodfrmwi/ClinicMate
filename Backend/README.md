# ClinicMate Backend

This is the backend for the ClinicMate application, built with Node.js, Express, and MongoDB.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (running locally or a cloud instance)

## Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
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
        ```
    -   Update the values in `.env` with your local configuration.
    
4.  **Seed the Database (Optional)**:
    -   To populate the database with dummy data (1 Clinic, 1 Admin, 1 Patient, 15 Doctors), run:
        ```bash
        node seed.js
        ```
        *Note: This will clear any existing data in the database.*

## Running the Application

-   **Development Mode** (with Nodemon):
    ```bash
    npm run dev
    ```

-   **Production Mode**:
    ```bash
    npm start
    ```

The server will start on port 4000 (or the port specified in your `.env`).

## API Endpoints

### Auth
-   `POST /api/rest/authRoute/register` - Register a new clinic/admin
-   `POST /api/rest/authRoute/login` - Login

### Doctors
-   `GET /api/rest/doctorsRoute` - Get all doctors
-   `GET /api/rest/doctorsRoute/:id` - Get a specific doctor
-   `POST /api/rest/doctorsRoute` - Add a new doctor (Auth required)
-   `PUT /api/rest/doctorsRoute/:id` - Update a doctor (Auth required)
-   `DELETE /api/rest/doctorsRoute/:id` - Delete a doctor (Auth required)

### Appointments
-   `GET /api/rest/appointmentsRoute`
-   (Add other appointments endpoints here based on implementation)

## Project Structure

-   `controllers/` - Request handlers
-   `routes/` - API route definitions
-   `models/` (or `DB/`) - Database schemas
-   `middlewares/` - Custom middlewares (Error handling, Auth)
