import Router from 'express'
import ArticlesController from "./ArticlesController.js";

const router = new Router()

router.get('/documents1', ArticlesController.getAll);
router.get('/documents2', ArticlesController.getAll);
// router.get('/documents1', ActivityController.getAllDoc1);
// router.get('/documents2', ActivityController.getAllDoc2);

// router.post('/documents1', ActivityController.create);
// router.get('/activity', ActivityController.getAll)
// router.get('/activity/:id', ActivityController.getOne)

export default router;
