import AuthController from "@src/controllers/AuthController/AuthController";
import { Router } from "express";

const router = Router();

router.post("/store", AuthController.store);
router.post("/login", AuthController.login);
router.post("/logout", AuthController.logout);
router.get("/user", AuthController.user);

export default router;