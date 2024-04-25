import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        proxy:{
          "/api":{
              
                target: 'http://server:5050', // see here
                changeOrigin: true,
                rewrite: (path) => path.replace('^/api','/')
            }
        },
        host: '0.0.0.0',
        port: 5173,
        
    },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
