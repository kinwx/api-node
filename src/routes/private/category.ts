import CategoryController from "../../controllers/CategoryController/CategoryController.js";
import authMiddleware from "../../middleware/authMiddleware.js";
import { Router } from "express";

const router = Router();

router.use(authMiddleware);

router.get("/", CategoryController.index);
router.get("/:id", CategoryController.show);
router.post("/", CategoryController.store);
router.put("/:id", CategoryController.update);
router.delete("/:id", CategoryController.delete);

export default router;
