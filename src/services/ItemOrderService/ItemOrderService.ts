import ItemOrderRepository from "@src/repositories/ItemOrderRepository/ItemOrderRepository";
import { Request } from "express";

export default {
  findAll() {
    const itemsOrder = ItemOrderRepository.findAll();

    return itemsOrder;
  },
  findItemOrderById(req: Request) {
    const { id } = req.params;

    const order = ItemOrderRepository.findById(id);
    if (!order) throw new Error();

    return order;
  },
  async createItemOrder(req: Request) {
    const { order_id, product_id, price, quantity } = req.body;

    const order = ItemOrderRepository.create({
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

    return order;
  },
  async deleteItemOrder(req: Request) {
    const { id } = req.params;

    const order = await ItemOrderRepository.findById(id);
    if (!order) throw new Error();

    await order.destroy();

    return true;
  },
};
