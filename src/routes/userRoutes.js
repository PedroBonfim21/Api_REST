import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', loginRequired, userController.index); // fins de aprendizdo (apagar dps)
router.get('/:id', userController.show); // fins de aprendizdo (apagar dps)

router.post('/', userController.create);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
index -> Lista todos -> GET
store/create -> cria -> POST
delete -> apaga 1 -> DELETE
show -> mostra 1 -> GET
update -> atualiza 1 -> PATCH OU PUT
*/
