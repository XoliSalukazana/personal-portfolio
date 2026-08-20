import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages can serve the site from a repository sub-path.
// The GitHub Actions workflow sets the repository name automatically.
const base = process.env.GITHUB_ACTIONS
  ? `/${process.env.GITHUB_REPOSITORY.split("/")[1]}/`
  : "/";

export default defineConfig({
  plugins: [react()],
  base
});