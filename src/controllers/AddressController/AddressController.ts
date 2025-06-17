import { ApiResponse } from "../../helpers/ApiResponse/index.js";
import AddressService from "../../services/AddressService/AddressService.js";
import { Request, Response } from "express";

const errorMessages = {
  index: "Error ao buscar todos os endereços.",
  show: "Error ao buscar endereço.",
  store: "Error ao criar endereço.",
  update: "Error ao atualizar endereço.",
  delete: "Error ao excluir endereço.",
};

export default {
  index: async (_: Request, res: Response) => {
    try {
      return new ApiResponse(res).success(AddressService.findAll());
    } catch (error) {
      console.warn(errorMessages.index);
      console.error(error);

      return new ApiResponse(res).error(errorMessages.index);
    }
  },
  show: async (req: Request, res: Response) => {
    try {
      return new ApiResponse(res).success(AddressService.findAddressById(req));
    } catch (error) {
      console.warn(errorMessages.show);
      console.error(error);

      return new ApiResponse(res).error(errorMessages.show);
    }
  },
  store: async (req: Request, res: Response) => {
    try {
      return new ApiResponse(res).success(AddressService.createAddress(req));
    } catch (error) {
      console.warn(errorMessages.store);
      console.error(error);

      return new ApiResponse(res).error(errorMessages.store);
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      return new ApiResponse(res).success(AddressService.updateAddress(req));
    } catch (error) {
      console.warn(errorMessages.update);
      console.error(error);

      return new ApiResponse(res).error(errorMessages.update);
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      return new ApiResponse(res).success(AddressService.deleteAddress(req));
    } catch (error) {
      console.warn(errorMessages.delete);
      console.error(error);

      return new ApiResponse(res).error(errorMessages.delete);
    }
  },
};
