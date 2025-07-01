import CategoryController from "@src/controllers/CategoryController/CategoryController";
import authMiddleware from "@src/middleware/authMiddleware";
import { Router } from "express";

const router = Router();

router.use(authMiddleware);

router.get("/", CategoryController.index);
router.get("/:id", CategoryController.show);
router.post("/", CategoryController.store);
router.put("/:id", CategoryController.update);
router.delete("/:id", CategoryController.delete);

export default router;