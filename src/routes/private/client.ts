import { Router } from "express";
import ClientController from "../../controllers/ClientController/ClientController.js";
import authMiddleware from "../../middleware/authMiddleware.js";

const router = Router();

router.use(authMiddleware);

router.get("/", ClientController.index);
router.get("/:id", ClientController.show);
router.post("/", ClientController.store);
router.put("/:id", ClientController.update);
router.delete("/:id", ClientController.delete);

export default router;
