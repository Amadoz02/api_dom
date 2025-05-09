import express from "express";
const router = express.Router();
import * as controller from '../controllers/usuariosController.js';

                 


router.get('/', controller.getUsuarios);
router.post('/', controller.createUsuario);
router.put('/:id', controller.updateUsuario);
router.patch('/:id', controller.patchUsuario);
router.delete('/:id', controller.deleteUsuario);

export default router;