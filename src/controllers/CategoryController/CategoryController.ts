import { ApiResponse } from "@src/helpers/ApiResponse";
import CategoryService from "@src/services/CategoryService/CategoryService";
import { Request, Response } from "express";

const errorMessages = {
    index: "Error ao buscar todos os categorias.",
    show: "Error ao buscar categoria.",
    store: "Error ao criar categoria.",
    update: "Error ao atualizar categoria.",
    delete: "Error ao excluir categoria.",
}

export default {
    index: async (req: Request, res: Response) => {
        try {
            return new ApiResponse(res).success(CategoryService.findAll());
        } catch (error) {
            console.warn(errorMessages.index);
            console.error(error);

            return new ApiResponse(res).error(errorMessages.index);
        };
    },
    show: async (req: Request, res: Response) => {
        try {
            return res.status(200).json({ message: "Sucesso", response: CategoryService.findCategoryById(req, res), status: true });
        } catch (error) {
            console.warn(errorMessages.show);
            console.error(error);

            return new ApiResponse(res).error(errorMessages.show);
        }
    },
    store: async (req, res) => {
        try {
            return res.status(200).json({ message: "Sucesso", response: CategoryService.createCategory(req, res), status: true });
        } catch (error) {
            console.warn(errorMessages.store);
            console.error(error);

            return new ApiResponse(res).error(errorMessages.store);
        }
    },
    update: async (req: Request, res: Response) => {
        try {
            return res.status(200).json({ message: "Sucesso", response: CategoryService.updateCategory(req, res), status: true });
        } catch (error) {
            console.warn(errorMessages.update);
            console.error(error);

            return new ApiResponse(res).error(errorMessages.update);
        }
    },
    delete: async (req: Request, res: Response) => {
        try {
            return res.status(200).json({ message: "Sucesso", response: CategoryService.deleteCategory(req, res), status: true });
        } catch (error) {
            console.warn(errorMessages.delete);
            console.error(error);

            return new ApiResponse(res).error(errorMessages.delete);
        }
    },
};