import { Router } from 'express';

import pictureController from '../controllers/PictureController';

const router = new Router();

router.post('/', pictureController.create);

export default router;
