import ItemOrderController from "../../controllers/ItemOrderController/ItemOrderController.js";
import { Router } from "express";

const router = Router();

router.get("/", ItemOrderController.index);
router.get("/:id", ItemOrderController.show);
router.post("/", ItemOrderController.store);
router.put("/:id", ItemOrderController.update);
router.delete("/:id", ItemOrderController.delete);

export default router;
