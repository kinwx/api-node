import OrderRepository from "../../repositories/OrderRepository/OrderRepository.js";
import { Request } from "express";

export default {
  async findAll() {
    return await OrderRepository.findAll();
  },
  async findOrderById(req: Request) {
    const { id } = req.params;

    const order = await OrderRepository.findById(id);
    if (!order) throw new Error();

    return order;
  },
  async createOrder(req: Request) {
    const { client_id, status } = req.body;

    const order = await OrderRepository.create({ client_id, status });

    return order;
  },
  async updateOrder(req: Request) {
    const { id } = req.params;
    const { client_id, status } = req.body;

    const order = await OrderRepository.findById(id);
    if (!order) throw new Error();

    await order.update({ client_id, status });

    return order.reload();
  },
  async deleteOrder(req: Request) {
    const { id } = req.params;

    const order = await OrderRepository.findById(id);
    if (!order) throw new Error();

    await order.destroy();

    return true;
  },
};
