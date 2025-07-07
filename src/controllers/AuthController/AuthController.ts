import { ApiResponse } from "../../helpers/ApiResponse/index.js";
import { Request, Response } from "express";
import AuthService from "../../services/AuthService/AuthService.js";
import { AuthenticatedRequest } from "../../middleware/authMiddleware.js";

const errorMessages = {
  store: "Error ao criar usuário.",
  login: "Error ao fazer login",
  logout: "Error ao fazer logout",
  user: "Error ao procurar usuário",
};

export default {
  store: async (req: Request, res: Response) => {
    await AuthService.store(req)
      .then((user) => new ApiResponse(res, 201).success(user))
      .catch((error) => new ApiResponse(res).error(error.message ?? errorMessages.store, error?.status))
  },
  login: async (req: Request, res: Response) => {
    try {
      return new ApiResponse(res, 202).login(await AuthService.login(req));
    } catch (error: any) {
      return new ApiResponse(res).error(error.message ?? errorMessages.login);
    }
  },
  logout: async (res: Response) => {
    try {
      return new ApiResponse(res).logout();
    } catch (error: any) {
      return new ApiResponse(res).error(error.message ?? errorMessages.logout);
    }
  },
  user: async (res: Response, req: Request) => {
    try {
      return new ApiResponse(res).success(
        AuthService.user(req as AuthenticatedRequest)
      );
    } catch (error: any) {
      return new ApiResponse(res).error(error.message ?? errorMessages.user);
    }
  },
};
