import ItemOrderController from "@src/controllers/ItemOrderController/ItemOrderController";
import authMiddleware from "@src/middleware/authMiddleware";
import { Router } from "express";

const router = Router();

router.use(authMiddleware);

router.get("/", ItemOrderController.index);
router.get("/:id", ItemOrderController.show);
router.post("/", ItemOrderController.store);
router.put("/:id", ItemOrderController.update);
router.delete("/:id", ItemOrderController.delete);

export default router;