import Router from 'express'
import ArticlesController from "./ArticlesController.js";

const router = new Router()

router.get('/documents1', ArticlesController.getAll);
router.get('/documents2', ArticlesController.getAll);
router.post('/cancel', ArticlesController.cancel);
router.post('/documents1', ArticlesController.create);

export default router;
