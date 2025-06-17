import { ApiResponse } from "@src/helpers/ApiResponse";
import ClientService from "@src/services/ClientService/ClientService";
import { Request, Response } from "express";

const errorMessages = {
    index: "Error ao buscar todos os clientes",
    show: "Error ao buscar cliente.",
    store: "Error ao criar cliente.",
    update: "Error ao atualizar cliente.",
    delete: "Error ao excluir cliente.",
}

export default {
    index: async (req: Request, res: Response) => {
        try {
            return new ApiResponse(res).success(ClientService.findAll());
        } catch (error) {
            console.warn(errorMessages.index);
            console.error(error);

            return new ApiResponse(res).error(errorMessages.index);
        };
    },
    show: async (req: Request, res: Response) => {
        try {
            return res.status(200).json({ message: "Sucesso", response: ClientService.findClientById(req, res), status: true });
        } catch (error) {
            console.warn(errorMessages.show);
            console.error(error);

            return new ApiResponse(res).error(errorMessages.show);
        }
    },
    store: async (req, res) => {
        try {
            return res.status(200).json({ message: "Sucesso", response: ClientService.createClient(req, res), status: true });
        } catch (error) {
            console.warn(errorMessages.store);
            console.error(error);

            return new ApiResponse(res).error(errorMessages.store);
        }
    },
    update: async (req: Request, res: Response) => {
        try {
            return res.status(200).json({ message: "Sucesso", response: ClientService.updateClient(req, res), status: true });
        } catch (error) {
            console.warn(errorMessages.update);
            console.error(error);

            return new ApiResponse(res).error(errorMessages.update);
        }
    },
    delete: async (req: Request, res: Response) => {
        try {
            return res.status(200).json({ message: "Sucesso", response: ClientService.deleteClient(req, res), status: true });
        } catch (error) {
            console.warn(errorMessages.delete);
            console.error(error);

            return new ApiResponse(res).error(errorMessages.delete);
        }
    },
};