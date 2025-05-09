import { Router } from 'express';
const router = Router();
import  getCiudades from '../controllers/ciudadesController.js';

router.get('/', getCiudades);

export default router;