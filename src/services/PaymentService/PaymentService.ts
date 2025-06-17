import PaymentRepository from "../../repositories/PaymentRepository/PaymentRepository.js";
import { Request } from "express";

export default {
  findAll() {
    const payments = PaymentRepository.findAll();

    return payments;
  },
  findPaymentById(req: Request) {
    const { id } = req.params;

    const payment = PaymentRepository.findById(id);
    if (!payment) throw new Error();

    return payment;
  },
  async createPayment(req: Request) {
    const { order_id, status_payment, type_payment, value } = req.body;

    const payment = PaymentRepository.create({
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

    return payment;
  },
  async deletePayment(req: Request) {
    const { id } = req.params;

    const payment = await PaymentRepository.findById(id);
    if (!payment) throw new Error();

    await payment.destroy();

    return true;
  },
};
