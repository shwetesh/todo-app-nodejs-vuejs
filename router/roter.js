import express from "express";
import todoController from "../controllers/complete-controller.js";
const router = express.Router();

router.post('/',todoController.add);
router.delete('/:id',todoController.deleteone)
router.post('/:id',todoController.update)
router.get('/',todoController.list)

export default router;