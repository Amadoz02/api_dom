import { Router } from 'express';
const router = Router();
import  getGeneros  from '../controllers/generosController.js';

router.get('/', getGeneros);

export default router;