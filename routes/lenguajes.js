import { Router } from 'express';
const router = Router();
import  getLenguajes  from '../controllers/lenguajesController.js';

router.get('/', getLenguajes);

export default router;