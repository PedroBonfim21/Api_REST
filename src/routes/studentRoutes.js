import { Router } from 'express';
import studentController from '../controllers/StudentController';

const router = new Router();

router.get('/', studentController.index);
router.get('/:id', studentController.show);
router.post('/', studentController.create);
router.put('/:id', studentController.update);
router.delete('/:id', studentController.delete);
// add protecao as rotas antes do deploy
export default router;
