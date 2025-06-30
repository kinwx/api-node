import ItemOrderRepository from "@src/repositories/ItemOrderRepository/ItemOrderRepository";
import { Request } from "express";

export default {
  async findAll() {
    return await ItemOrderRepository.findAll();
  },
  async findItemOrderById(req: Request) {
    const { id } = req.params;

    const order = await ItemOrderRepository.findById(id);
    if (!order) throw new Error();

    return order;
  },
  async createItemOrder(req: Request) {
    const { order_id, product_id, price, quantity } = req.body;

    const order = await ItemOrderRepository.create({
      order_id,
      product_id,
      price,
      quantity,
    });

    return order;
  },
  async updateItemOrder(req: Request) {
    const { id } = req.params;
    const { order_id, product_id, price, quantity } = req.body;

    const order = await ItemOrderRepository.findById(id);
    if (!order) throw new Error();

    await order.update({ order_id, product_id, price, quantity });

    return order.reload();
  },
  async deleteItemOrder(req: Request) {
    const { id } = req.params;

    const order = await ItemOrderRepository.findById(id);
    if (!order) throw new Error();

    await order.destroy();

    return true;
  },
};
