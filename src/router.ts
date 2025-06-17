import express from "express";
import ClientRoutes from "./routes/private/client.js";
import AddressRoutes from "./routes/private/address.js";
import OrderRoutes from "./routes/private/order.js";
import CategoryRoutes from "./routes/private/category.js";
import ProductRoutes from "./routes/private/product.js";
import ItemOrderRoutes from "./routes/private/itemOrder.js";
import PaymentRoutes from "./routes/private/payment.js";

const router = express.Router();

router.use("/clients", ClientRoutes);
router.use("/adresses", AddressRoutes);
router.use("/orders", OrderRoutes);
router.use("/categories", CategoryRoutes);
router.use("/products", ProductRoutes);
router.use("/items", ItemOrderRoutes);
router.use("/payments", PaymentRoutes);

export default router;
