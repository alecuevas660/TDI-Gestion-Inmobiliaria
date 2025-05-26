// server.js para producción y desarrollo moderno
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import contactoRoutes from './routes/contactoRoutes.js';

// Configuración inicial
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Configuración CORS para producción y desarrollo
const corsOptions = {
  origin: [
    'https://tdigestion.com.com',
    'https://www.tdigestion.com/',
    'http://localhost:4321'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas API
app.use('/api/contacto', contactoRoutes);

// Archivos estáticos para producción
app.use(express.static(join(__dirname, 'dist', 'client'), {
  index: false,
  maxAge: '1y',
  immutable: true,
  setHeaders: (res, path) => {
    if (path.endsWith('.html')) {
      res.setHeader('Cache-Control', 'public, max-age=0');
    }
  }
}));

// Manejo asíncrono de Astro SSR
async function setupAstro() {
  const { handler } = await import('./dist/server/entry.mjs');
  return handler;
}

// Iniciar servidor
setupAstro().then(astroHandler => {
  // Middleware de Astro
  app.use((req, res, next) => {
    if (!req.path.startsWith('/api')) {
      return astroHandler(req, res, next);
    }
    next();
  });

  // Manejo de errores 404
  app.use((req, res) => {
    res.status(404).json({
      status: 'error',
      message: 'Recurso no encontrado'
    });
  });

  app.listen(port, () => {
    console.log(`🚀 Servidor en puerto: ${port}`);
    console.log(`➔ Modo: ${process.env.NODE_ENV || 'production'}`);
  });
}).catch(error => {
  console.error('Error al cargar Astro:', error);
  process.exit(1);
});

