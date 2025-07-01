import { Router } from "express";
import ClientController from "@src/controllers/ClientController/ClientController";
import authMiddleware from "@src/middleware/authMiddleware";

const router = Router();

router.use(authMiddleware);

router.get("/", ClientController.index);
router.get("/:id", ClientController.show);
router.post("/", ClientController.store);
router.put("/:id", ClientController.update);
router.delete("/:id", ClientController.delete);

export default router;