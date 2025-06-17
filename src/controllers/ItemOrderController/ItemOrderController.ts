import { ApiResponse } from "@src/helpers/ApiResponse";
import ItemOrderService from "@src/services/ItemOrderService/ItemOrderService";
import { Request, Response } from "express";

const errorMessages = {
  index: "Error ao buscar todos os items do pedido",
  show: "Error ao buscar item do pedido.",
  store: "Error ao criar item do pedido.",
  update: "Error ao atualizar item do pedido.",
  delete: "Error ao excluir item do pedido.",
};

export default {
  index: async (_: Request, res: Response) => {
    try {
      return new ApiResponse(res).success(ItemOrderService.findAll());
    } catch (error) {
      console.warn(errorMessages.index);
      console.error(error);

      return new ApiResponse(res).error(errorMessages.index);
    }
  },
  show: async (req: Request, res: Response) => {
    try {
      return new ApiResponse(res).success(
        ItemOrderService.findItemOrderById(req)
      );
    } catch (error) {
      console.warn(errorMessages.show);
      console.error(error);

      return new ApiResponse(res).error(errorMessages.show);
    }
  },
  store: async (req: Request, res: Response) => {
    try {
      return new ApiResponse(res).success(
        ItemOrderService.createItemOrder(req)
      );
    } catch (error) {
      console.warn(errorMessages.store);
      console.error(error);

      return new ApiResponse(res).error(errorMessages.store);
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      return new ApiResponse(res).success(
        ItemOrderService.updateItemOrder(req)
      );
    } catch (error) {
      console.warn(errorMessages.update);
      console.error(error);

      return new ApiResponse(res).error(errorMessages.update);
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      return new ApiResponse(res).success(
        ItemOrderService.deleteItemOrder(req)
      );
    } catch (error) {
      console.warn(errorMessages.delete);
      console.error(error);

      return new ApiResponse(res).error(errorMessages.delete);
    }
  },
};
