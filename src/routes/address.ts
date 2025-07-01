import AddressController from "@src/controllers/AddressController/AddressController";
import authMiddleware from "@src/middleware/authMiddleware";
import { Router } from "express";

const router = Router();

router.use(authMiddleware);

router.get("/", AddressController.index);
router.get("/:id", AddressController.show);
router.post("/", AddressController.store);
router.put("/:id", AddressController.update);
router.delete("/:id", AddressController.delete);

export default router;