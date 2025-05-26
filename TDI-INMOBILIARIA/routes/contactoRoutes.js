import { Router } from 'express';
import contactController from '../controllers/contactoController.js';

const router = Router();

// Ruta POST para enviar mensaje de contacto
router.post('/contacto/contact', contactController.sendContactEmail);

export default router;