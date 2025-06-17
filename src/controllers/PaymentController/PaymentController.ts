import { ApiResponse } from "@src/helpers/ApiResponse";
import PaymentService from "@src/services/PaymentService/PaymentService";
import { Request, Response } from "express";

const errorMessages = {
    index: "Error ao buscar todos os pagamentos.",
    show: "Error ao buscar pagamento.",
    store: "Error ao criar pagamento.",
    update: "Error ao atualizar pagamento.",
    delete: "Error ao excluir pagamento.",
}

export default {
    index: async (req: Request, res: Response) => {
        try {
            return new ApiResponse(res).success(PaymentService.findAll());
        } catch (error) {
            console.warn(errorMessages.index);
            console.error(error);

            return new ApiResponse(res).error(errorMessages.index);
        };
    },
    show: async (req: Request, res: Response) => {
        try {
            return res.status(200).json({ message: "Sucesso", response: PaymentService.findPaymentById(req, res), status: true });
        } catch (error) {
            console.warn(errorMessages.show);
            console.error(error);

            return new ApiResponse(res).error(errorMessages.show);
        }
    },
    store: async (req, res) => {
        try {
            return res.status(200).json({ message: "Sucesso", response: PaymentService.createPayment(req, res), status: true });
        } catch (error) {
            console.warn(errorMessages.store);
            console.error(error);

            return new ApiResponse(res).error(errorMessages.store);
        }
    },
    update: async (req: Request, res: Response) => {
        try {
            return res.status(200).json({ message: "Sucesso", response: PaymentService.updatePayment(req, res), status: true });
        } catch (error) {
            console.warn(errorMessages.update);
            console.error(error);

            return new ApiResponse(res).error(errorMessages.update);
        }
    },
    delete: async (req: Request, res: Response) => {
        try {
            return res.status(200).json({ message: "Sucesso", response: PaymentService.deletePayment(req, res), status: true });
        } catch (error) {
            console.warn(errorMessages.delete);
            console.error(error);

            return new ApiResponse(res).error(errorMessages.delete);
        }
    },
};