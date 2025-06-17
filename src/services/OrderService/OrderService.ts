import OrderRepository from "@src/repositories/OrderRepository/OrderRepository";
import { Request, Response } from "express";

export default {
    findAll() {
        const orders = OrderRepository.findAll();

        return orders;
    },
    findOrderById(req: Request, res: Response) {
        const { id } = req.params;

        const order = OrderRepository.findById(id);
        if (!order)
            throw new Error();

        return order;
    },
    async createOrder(req: Request, res: Response) {
        const { client_id, status } = req.body;

        const order = OrderRepository.create({ client_id, status })

        return order;
    },
    async updateOrder(req: Request, res: Response) {
        const { id } = req.params;
        const { client_id, status } = req.body;

        const order = await OrderRepository.findById(id);
        if (!order)
            throw new Error();

        await order.update({ client_id, status });

        return order;
    },
    async deleteOrder(req: Request, res: Response) {
        const { id } = req.params;

        const order = await OrderRepository.findById(id);
        if (!order)
            throw new Error();

        await order.destroy();

        return true;
    }
};