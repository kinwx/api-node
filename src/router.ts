import { Router } from "express";
import ClientRoutes from "@src/routes/client";
import AddressRoutes from "@src/routes/address";
import OrderRoutes from "@src/routes/order";
import CategoryRoutes from "@src/routes/category";
import ProductRoutes from "@src/routes/product";
import ItemOrderRoutes from "@src/routes/itemOrder";
import PaymentRoutes from "@src/routes/payment";

const router = Router();

router.use("/clients", ClientRoutes);
router.use("/adresses", AddressRoutes);
router.use("/orders", OrderRoutes);
router.use("/categories", CategoryRoutes);
router.use("/products", ProductRoutes);
router.use("/items", ItemOrderRoutes);
router.use("/payments", PaymentRoutes);

export default router;