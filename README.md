# Gen Informed (Elimisha Raia)

Welcome to the Gen Informed project! We are building a gamified civic learning platform to empower the next generation of Kenyan citizens through innovative and accessible education.

## Project Vision

Our mission is to make civic education engaging and relevant for Kenyan students (ages 10-17) by simplifying constitutional content through gamified learning experiences. We aim to foster a generation that understands their rights, participates in governance, and builds a just society.

## Tech Stack

-   **Frontend**: React, Vite, Tailwind CSS
-   **Backend**: Node.js, Express.js
-   **Database**: MongoDB (with Mongoose)
-   **Routing**: React Router
-   **Deployment**: TBD

## Project Structure

The repository is a monorepo containing both the `client` (frontend) and `server` (backend) applications.

```
/
├── client/         # React frontend application
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/ # Reusable UI components
│   │   ├── pages/      # Page components
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── tailwind.config.js
│
└── server/         # Node.js backend application
    ├── config/     # Database configuration
    ├── controllers/
    ├── models/     # Mongoose schemas
    ├── routes/     # API routes
    ├── .env.example # Environment variable template
    └── index.js
```

## Getting Started

Follow these instructions to get the development environment up and running on your local machine.

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18.x or later)
-   [npm](https://www.npmjs.com/) (comes with Node.js)
-   [MongoDB](https://www.mongodb.com/try/download/community) installed and running locally, or a MongoDB Atlas cluster.

### 1. Clone the Repository

```bash
git clone https://github.com/Jack-khalif/Elimisha-Raia.git
cd Elimisha-Raia
```

### 2. Setup the Backend

The backend server connects to the database and serves the API.

```bash
# Navigate to the server directory
cd server

# Install dependencies
npm install

# Create a .env file from the example
cp .env.example .env
```

Now, open the `.env` file and add your configuration details, such as your MongoDB connection string and a port number.

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Finally, start the backend server:

```bash
# Start the server in development mode (with nodemon)
npm run dev
```

The server should now be running on the port you specified (e.g., `http://localhost:5000`).

### 3. Setup the Frontend

The frontend is a React application built with Vite.

```bash
# Navigate to the client directory from the root
cd client

# Install dependencies
npm install

# Start the development server
npm run dev
```

The React development server will start, typically on `http://localhost:5173`. Open this URL in your browser to see the application.

## Contribution Guidelines

To ensure a smooth workflow, please follow these guidelines:

1.  **Create a new branch** for every feature or bug fix.
    ```bash
    git checkout -b feat/name-of-feature
    ```
2.  **Commit your changes** with clear, descriptive messages. We follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.
    -   `feat:` for new features.
    -   `fix:` for bug fixes.
    -   `docs:` for documentation changes.
    -   `style:` for code style changes (formatting, etc.).
    -   `refactor:` for code changes that neither fix a bug nor add a feature.
    -   `chore:` for build process or auxiliary tool changes.
3.  **Push your branch** to the remote repository.
    ```bash
    git push origin feat/name-of-feature
    ```
4.  **Open a Pull Request (PR)** on GitHub, detailing the changes you've made.
5.  Request a review from at least one other teammate.

Thank you for your contribution! Let's build something amazing together.