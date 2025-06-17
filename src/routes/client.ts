import { Router } from "express";
import ClientController from "@src/controllers/ClientController/ClientController";

const router = Router();

router.get("/", ClientController.index);
router.get("/:id", ClientController.show);
router.post("/", ClientController.store);
router.put("/:id", ClientController.update);
router.delete("/:id", ClientController.delete);

export default router;