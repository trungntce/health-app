# Health App

This document provides detailed setup and usage instructions for the Health App project. It covers the application's structure, key components, and the libraries used.

## To log in at the login page, please use:
*Account**: admin
*Password**: admin

## Project Structure

```plaintext
health-app/
├── server/
│   ├── models/                  # Contains mock objects for the application
│   ├── server.js                # Sets up and runs the Express server, middleware, routes
│   └── service/                 # Business logic and database interaction services
├── src/
│   ├── App.js                   # Main React component with global layout
│   ├── App.test.js              # Tests for the App component
│   ├── components/              # Reusable React components
│   ├── config/                  # Configuration files (e.g., API setup)
│   ├── index.js                 # Entry point for the React application
│   ├── pages/                   # React components for different pages
│   ├── reportWebVitals.js       # Measures the performance of the app
│   ├── routes/                  # Routing configuration for the app
│   └── setupTests.js            # Setup for Jest and other testing utilities
├── .babelrc                     # Babel configuration
├── .env.local                   # Local development environment variables
├── .gitignore                   # Specifies untracked files to ignore
├── .prettierrc                  # Prettier code formatting configuration
├── config-overrides.js          # Custom webpack configurations
├── jsconfig.json                # JS language services configuration
├── package.json                 # Project scripts and dependencies
├── package-lock.json            # Locked npm package versions
└── README.md                    # This documentation
```

## Libraries and Dependencies

### Main Dependencies

-   `axios`: HTTP request library for browser and node.js.
-   `bcrypt`: Password hashing function for securely storing passwords.
-   `chart.js` and `react-chartjs-2`: Charting libraries for React.
-   `classnames`: Utility for conditionally joining classNames together.
-   `cors`: Middleware to enable CORS (Cross-Origin Resource Sharing).
-   `dotenv`: Loads environment variables from `.env` files.
-   `jsonwebtoken`: Implements JSON Web Tokens for authorization.
-   `normalize.css`: Makes browsers render all elements more consistently.
-   `react`, `react-dom`, `react-router-dom`: Core libraries for building the UI.
-   `react-scripts`: Includes scripts and configuration for the project.

### Development Dependencies

-   `@testing-library`: Utilities for testing React components.
-   `babel-plugin-module-resolver`: Customizes the resolution of paths for Babel.
-   `concurrently`: Allows running multiple commands concurrently in development.
-   `customize-cra`, `react-app-rewired`: Customize CRA configurations without ejecting.
-   `sass`: CSS pre-processor with syntax advancements.

## Setup and Running

1. Clone the repository and navigate to the project directory.
2. Install dependencies: `npm install`.
3. To start the development server for both the frontend and the backend, run:
    ```sh
    npm run dev
    ```
    This command uses `concurrently` to run both servers in parallel. The API server will start on port 3031, and the client server will start on port 3030.

## Running with npm run dev

When you use the `npm run dev` command, it simultaneously starts two servers:

-   **API Server**: Runs on port 3031 and handles backend requests.
-   **Client Server**: Runs on port 3030 and serves the React frontend.

This setup is ideal for development, allowing you to work on both the frontend and backend simultaneously with real-time updates.

For more detailed information on running tests, building for production, or any specific configurations, please refer to the respective sections above.

## Conclusion

This README aims to provide a comprehensive guide to setting up, understanding, and using the Health App project. If you have any further questions or require additional information, feel free to reach out or consult the documentation linked throughout this guide.
