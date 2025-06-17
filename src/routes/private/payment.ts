import PaymentController from "../../controllers/PaymentController/PaymentController.js";
import { Router } from "express";

const router = Router();

router.get("/", PaymentController.index);
router.get("/:id", PaymentController.show);
router.post("/", PaymentController.store);
router.put("/:id", PaymentController.update);
router.delete("/:id", PaymentController.delete);

export default router;
