
import { defineConfig } from "cypress";

export default defineConfig({
e2e: {
   // Укажите URL вашего dev-сервера
    baseUrl: 'http://localhost:5173',
    allowCypressEnv: false,
    supportFile: false,
    setupNodeEvents(on, config) {
      // import.meta is available in ESM configs
      return config
    },
},
});