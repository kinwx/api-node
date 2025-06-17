import AddressController from "../../controllers/AddressController/AddressController.js";
import { Router } from "express";

const router = Router();

router.get("/", AddressController.index);
router.get("/:id", AddressController.show);
router.post("/", AddressController.store);
router.put("/:id", AddressController.update);
router.delete("/:id", AddressController.delete);

export default router;
