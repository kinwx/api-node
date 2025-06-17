import { ApiResponse } from "@src/helpers/ApiResponse";
import AddressService from "@src/services/AddressService/AddressService";
import { Request, Response } from "express";

const errorMessages = {
    index: "Error ao buscar todos os endereços.",
    show: "Error ao buscar endereço.",
    store: "Error ao criar endereço.",
    update: "Error ao atualizar endereço.",
    delete: "Error ao excluir endereço.",
}

export default {
    index: async (req: Request, res: Response) => {
        try {
            return new ApiResponse(res).success(AddressService.findAll());
        } catch (error) {
            console.warn(errorMessages.index);
            console.error(error);

            return new ApiResponse(res).error(errorMessages.index);
        };
    },
    show: async (req: Request, res: Response) => {
        try {
            return res.status(200).json({ message: "Sucesso", response: AddressService.findAddressById(req, res), status: true });
        } catch (error) {
            console.warn(errorMessages.show);
            console.error(error);

            return new ApiResponse(res).error(errorMessages.show);
        }
    },
    store: async (req, res) => {
        try {
            return res.status(200).json({ message: "Sucesso", response: AddressService.createAddress(req, res), status: true });
        } catch (error) {
            console.warn(errorMessages.store);
            console.error(error);

            return new ApiResponse(res).error(errorMessages.store);
        }
    },
    update: async (req: Request, res: Response) => {
        try {
            return res.status(200).json({ message: "Sucesso", response: AddressService.updateAddress(req, res), status: true });
        } catch (error) {
            console.warn(errorMessages.update);
            console.error(error);

            return new ApiResponse(res).error(errorMessages.update);
        }
    },
    delete: async (req: Request, res: Response) => {
        try {
            return res.status(200).json({ message: "Sucesso", response: AddressService.deleteAddress(req, res), status: true });
        } catch (error) {
            console.warn(errorMessages.delete);
            console.error(error);

            return new ApiResponse(res).error(errorMessages.delete);
        }
    },
};