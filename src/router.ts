import { Router } from "express";
import ClientRoutes from "@src/routes/client";

const router = Router();

router.use("/clients", ClientRoutes);

export default router;