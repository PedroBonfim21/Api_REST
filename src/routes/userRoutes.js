import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/', userController.create);

export default router;

/*
index -> Lista todos -> GET
store/create -> cria -> POST
delete -> apaga 1 -> DELETE
show -> mostra 1 -> GET
update -> atualiza 1 -> PATCH OU PUT
*/
