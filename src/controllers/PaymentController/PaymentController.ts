import { ApiResponse } from "../../helpers/ApiResponse/index.js";
import PaymentService from "../../services/PaymentService/PaymentService.js";
import { Request, Response } from "express";

const errorMessages = {
  index: "Error ao buscar todos os pagamentos.",
  show: "Error ao buscar pagamento.",
  store: "Error ao criar pagamento.",
  update: "Error ao atualizar pagamento.",
  delete: "Error ao excluir pagamento.",
};

export default {
  index: async (_: Request, res: Response) => {
    try {
      return new ApiResponse(res).success(PaymentService.findAll());
    } catch (error) {
      console.warn(errorMessages.index);
      console.error(error);

      return new ApiResponse(res).error(errorMessages.index);
    }
  },
  show: async (req: Request, res: Response) => {
    try {
      return new ApiResponse(res).success(PaymentService.findPaymentById(req));
    } catch (error) {
      console.warn(errorMessages.show);
      console.error(error);

      return new ApiResponse(res).error(errorMessages.show);
    }
  },
  store: async (req: Request, res: Response) => {
    try {
      return new ApiResponse(res).success(PaymentService.createPayment(req));
    } catch (error) {
      console.warn(errorMessages.store);
      console.error(error);

      return new ApiResponse(res).error(errorMessages.store);
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      return new ApiResponse(res).success(PaymentService.updatePayment(req));
    } catch (error) {
      console.warn(errorMessages.update);
      console.error(error);

      return new ApiResponse(res).error(errorMessages.update);
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      return new ApiResponse(res).success(PaymentService.deletePayment(req));
    } catch (error) {
      console.warn(errorMessages.delete);
      console.error(error);

      return new ApiResponse(res).error(errorMessages.delete);
    }
  },
};
