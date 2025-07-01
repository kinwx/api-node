import AuthController from "@src/controllers/AuthController/AuthController";
import authMiddleware from "@src/middleware/authMiddleware";
import { Router } from "express";

const router = Router();

router.post("/store", AuthController.store);
router.post("/login", AuthController.login);
router.post("/logout", authMiddleware, AuthController.logout);
router.get("/user", authMiddleware, AuthController.user);

export default router;