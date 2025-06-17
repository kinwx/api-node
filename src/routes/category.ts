import CategoryController from "@src/controllers/CategoryController/CategoryController";
import { Router } from "express";

const router = Router();

router.get("/", CategoryController.index);
router.get("/:id", CategoryController.show);
router.post("/", CategoryController.store);
router.put("/:id", CategoryController.update);
router.delete("/:id", CategoryController.delete);

export default router;