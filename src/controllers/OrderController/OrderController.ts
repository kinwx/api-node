import { ApiResponse } from "@src/helpers/ApiResponse";
import OrderService from "@src/services/OrderService/OrderService";
import { Request, Response } from "express";

const errorMessages = {
    index: "Error ao buscar todos os pedidos.",
    show: "Error ao buscar pedido.",
    store: "Error ao criar pedido.",
    update: "Error ao atualizar pedido.",
    delete: "Error ao excluir pedido.",
}

export default {
    index: async (req: Request, res: Response) => {
        try {
            return new ApiResponse(res).success(OrderService.findAll());
        } catch (error) {
            console.warn(errorMessages.index);
            console.error(error);

            return new ApiResponse(res).error(errorMessages.index);
        };
    },
    show: async (req: Request, res: Response) => {
        try {
            return res.status(200).json({ message: "Sucesso", response: OrderService.findOrderById(req, res), status: true });
        } catch (error) {
            console.warn(errorMessages.show);
            console.error(error);

            return new ApiResponse(res).error(errorMessages.show);
        }
    },
    store: async (req, res) => {
        try {
            return res.status(200).json({ message: "Sucesso", response: OrderService.createOrder(req, res), status: true });
        } catch (error) {
            console.warn(errorMessages.store);
            console.error(error);

            return new ApiResponse(res).error(errorMessages.store);
        }
    },
    update: async (req: Request, res: Response) => {
        try {
            return res.status(200).json({ message: "Sucesso", response: OrderService.updateOrder(req, res), status: true });
        } catch (error) {
            console.warn(errorMessages.update);
            console.error(error);

            return new ApiResponse(res).error(errorMessages.update);
        }
    },
    delete: async (req: Request, res: Response) => {
        try {
            return res.status(200).json({ message: "Sucesso", response: OrderService.deleteOrder(req, res), status: true });
        } catch (error) {
            console.warn(errorMessages.delete);
            console.error(error);

            return new ApiResponse(res).error(errorMessages.delete);
        }
    },
};