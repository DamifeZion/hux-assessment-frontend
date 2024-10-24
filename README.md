# Contactly

This project is a React application using Vite as the build tool, combined with TypeScript for static typing, and ESLint for code linting and style enforcement. Vite provides fast builds and instant hot module replacement (HMR), making it an excellent choice for modern front-end development.

## Prerequisites

Make sure you have the following installed on your system:

-  Node.js: Download and install the LTS version (14.x or higher recommended).
-  npm: Node's package manager comes bundled with Node.js.

## Getting Started

1. Clone the repository

   ```bash
      https://github.com/DamifeZion/hux-assessment-frontend.git
   ```

2. Install dependencies
   Install the required dependencies using npm or yarn:

   ```bash
      # With npm
      npm install

      # With yarn
      yarn install
   ```

3. Run the development server
   Start the Vite development server:

```bash
      # With npm
      npm run dev

      # With yarn
      yarn dev

```

Open the application in your browser by navigating to:

```bash
   http://localhost:5173
```

4. Build for production
   To create an optimized production build, run:

```bash
      # With npm
      npm run build

      # With yarn
      yarn build

```

5. Preview the production build
   Once you've built the application, you can preview it locally with:

```bash
      # With npm
      npm run preview

      # With yarn
      yarn preview

```

This serves the production build locally on http://localhost:4173 to inspect and test the build output.

## Linting and Formatting

The project includes an ESLint configuration to ensure code quality and consistency.

### Run ESLint

```bash
      # With npm
      npm run lint

      # With yarn
      yarn lint
```

This will run ESLint checks on the source files.

## Environment Variables

You can set up environment variables in a .env file at the root of the project. Vite uses these variables during the build process. An example might look like:

```bash
   VITE_API_BASE_URL=https://hux-assessment-backend-5ul7.onrender.com/api/v1
```
