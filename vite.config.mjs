import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration
export default defineConfig({
    plugins: [react()],
    server: {
        host: true, // allow access from external hosts
        allowedHosts: [
            'rhea-defectible-wriggly.ngrok-free.dev'
        ],
        port: 5173, // or your project's port
    },
})