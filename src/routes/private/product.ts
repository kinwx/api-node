import ProductController from "../../controllers/ProductController/ProductController.js";
import authMiddleware from "../../middleware/authMiddleware.js";
import { Router } from "express";

const router = Router();

router.use(authMiddleware);

router.get("/", ProductController.index);
router.get("/:id", ProductController.show);
router.post("/", ProductController.store);
router.put("/:id", ProductController.update);
router.delete("/:id", ProductController.delete);

export default router;
