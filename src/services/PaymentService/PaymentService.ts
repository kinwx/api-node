import PaymentRepository from "../../repositories/PaymentRepository/PaymentRepository.js";
import { Request } from "express";

export default {
  async findAll() {
    return await PaymentRepository.findAll();
  },
  async findPaymentById(req: Request) {
    const { id } = req.params;

    const payment = await PaymentRepository.findById(id);
    if (!payment) throw new Error();

    return payment;
  },
  async createPayment(req: Request) {
    const { order_id, status_payment, type_payment, value } = req.body;

    const payment = await PaymentRepository.create({
      order_id,
      status_payment,
      type_payment,
      value,
    });

    return payment;
  },
  async updatePayment(req: Request) {
    const { id } = req.params;
    const { order_id, status_payment, type_payment, value } = req.body;

    const payment = await PaymentRepository.findById(id);
    if (!payment) throw new Error();

    await payment.update({ order_id, status_payment, type_payment, value });

    return payment.reload();
  },
  async deletePayment(req: Request) {
    const { id } = req.params;

    const payment = await PaymentRepository.findById(id);
    if (!payment) throw new Error();

    await payment.destroy();

    return true;
  },
};
