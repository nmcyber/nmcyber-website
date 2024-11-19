import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  // Load environment variables from .env file (or specific files for different modes)
  const env = loadEnv(mode, process.cwd());

  return {
    // Define environment variables for your React application
 
    plugins: [react()],
    resolve: {
      alias: {
        ["@"]: "/src",
      },
    },
  };
});

//  resolve: {
//   alias: {
//     ["@"]: "/src",
//   },
// },

// define: {
//   // Access environment variables using process.env.YOUR_VARIABLE_NAME
//   "process.env.REACT_APP_DEVELOPMENT": env.REACT_APP_DEVELOPMENT,
//   "process.env.REACT_APP_DEV_CLOUDFLARE_TURNSTILE_SITEKEY":
//     env.REACT_APP_DEV_CLOUDFLARE_TURNSTILE_SITEKEY,
//   "process.env.REACT_APP_CLOUDFLARE_TURNSTILE_SITEKEY":
//     env.REACT_APP_CLOUDFLARE_TURNSTILE_SITEKEY,
//   // Add any other environment variables you need
// },