import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(() => {
  return {
    base: '/',
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'admin-auth-dev-api',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            const url = req.url ? req.url.split('?')[0] : '';
            if (url === '/api/admin/login') {
              const handler = (await import('./api/admin/login.ts')).default;
              return handler(req, res);
            }
            if (url === '/api/admin/check') {
              const handler = (await import('./api/admin/check.ts')).default;
              return handler(req, res);
            }
            if (url === '/api/admin/logout') {
              const handler = (await import('./api/admin/logout.ts')).default;
              return handler(req, res);
            }
            if (url === '/api/likes') {
              const handler = (await import('./api/likes.ts')).default;
              return handler(req, res);
            }
            next();
          });
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      outDir: 'dist',
      sourcemap: false,
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    preview: {
      port: 3000,
      host: '0.0.0.0',
    },
  };
});
