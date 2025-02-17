import { Router } from 'express';
import studentController from '../controllers/StudentController';

const router = new Router();

router.get('/', studentController.index);
router.post('/', studentController.create);
router.put('/:id', studentController.update);
router.delete('/:id', studentController.delete);

export default router;
