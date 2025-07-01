import OrderController from "@src/controllers/OrderController/OrderController";
import authMiddleware from "@src/middleware/authMiddleware";
import { Router } from "express";

const router = Router();

router.use(authMiddleware);

router.get("/", OrderController.index);
router.get("/:id", OrderController.show);
router.post("/", OrderController.store);
router.put("/:id", OrderController.update);
router.delete("/:id", OrderController.delete);

export default router;