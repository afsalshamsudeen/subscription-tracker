import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.node, // ✅ Use Node.js globals
      ecmaVersion: 'latest', // ✅ Enable modern JavaScript
      sourceType: 'module',  // ✅ Since you are using import/export
    },
  },
]);
