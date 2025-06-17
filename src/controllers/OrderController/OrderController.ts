import { ApiResponse } from "../../helpers/ApiResponse/index.js";
import OrderService from "../../services/OrderService/OrderService.js";
import { Request, Response } from "express";

const errorMessages = {
  index: "Error ao buscar todos os pedidos.",
  show: "Error ao buscar pedido.",
  store: "Error ao criar pedido.",
  update: "Error ao atualizar pedido.",
  delete: "Error ao excluir pedido.",
};

export default {
  index: async (_: Request, res: Response) => {
    try {
      return new ApiResponse(res).success(OrderService.findAll());
    } catch (error) {
      console.warn(errorMessages.index);
      console.error(error);

      return new ApiResponse(res).error(errorMessages.index);
    }
  },
  show: async (req: Request, res: Response) => {
    try {
      return new ApiResponse(res).success(OrderService.findOrderById(req));
    } catch (error) {
      console.warn(errorMessages.show);
      console.error(error);

      return new ApiResponse(res).error(errorMessages.show);
    }
  },
  store: async (req: Request, res: Response) => {
    try {
      return new ApiResponse(res).success(OrderService.createOrder(req));
    } catch (error) {
      console.warn(errorMessages.store);
      console.error(error);

      return new ApiResponse(res).error(errorMessages.store);
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      return new ApiResponse(res).success(OrderService.updateOrder(req));
    } catch (error) {
      console.warn(errorMessages.update);
      console.error(error);

      return new ApiResponse(res).error(errorMessages.update);
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      return new ApiResponse(res).success(OrderService.deleteOrder(req));
    } catch (error) {
      console.warn(errorMessages.delete);
      console.error(error);

      return new ApiResponse(res).error(errorMessages.delete);
    }
  },
};
