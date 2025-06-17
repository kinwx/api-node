import { ApiResponse } from "../../helpers/ApiResponse/index.js";
import ProductService from "../../services/ProductService/ProductService.js";
import { Request, Response } from "express";

const errorMessages = {
  index: "Error ao buscar todos os produtos.",
  show: "Error ao buscar produto.",
  store: "Error ao criar produto.",
  update: "Error ao atualizar produto.",
  delete: "Error ao excluir produto.",
};

export default {
  index: async (_: Request, res: Response) => {
    try {
      return new ApiResponse(res).success(ProductService.findAll());
    } catch (error) {
      console.warn(errorMessages.index);
      console.error(error);

      return new ApiResponse(res).error(errorMessages.index);
    }
  },
  show: async (req: Request, res: Response) => {
    try {
      return new ApiResponse(res).success(ProductService.findProductById(req));
    } catch (error) {
      console.warn(errorMessages.show);
      console.error(error);

      return new ApiResponse(res).error(errorMessages.show);
    }
  },
  store: async (req: Request, res: Response) => {
    try {
      return new ApiResponse(res).success(ProductService.createProduct(req));
    } catch (error) {
      console.warn(errorMessages.store);
      console.error(error);

      return new ApiResponse(res).error(errorMessages.store);
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      return new ApiResponse(res).success(ProductService.updateProduct(req));
    } catch (error) {
      console.warn(errorMessages.update);
      console.error(error);

      return new ApiResponse(res).error(errorMessages.update);
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      return new ApiResponse(res).success(ProductService.deleteProduct(req));
    } catch (error) {
      console.warn(errorMessages.delete);
      console.error(error);

      return new ApiResponse(res).error(errorMessages.delete);
    }
  },
};
