import ItemOrderController from "../../controllers/ItemOrderController/ItemOrderController.js";
import authMiddleware from "../../middleware/authMiddleware.js";
import { Router } from "express";

const router = Router();

router.use(authMiddleware);

router.get("/", ItemOrderController.index);
router.get("/:id", ItemOrderController.show);
router.post("/", ItemOrderController.store);
router.put("/:id", ItemOrderController.update);
router.delete("/:id", ItemOrderController.delete);

export default router;
