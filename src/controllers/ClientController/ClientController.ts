import ClientService from "@src/services/ClientService/ClientService";
import { Request, Response } from "express";

export default {
    index: async (req: Request, res: Response) => {
        try {
            return ClientService.findAll(req, res);
        } catch (error) {
            console.warn("Error ao buscar todos os clientes");
            console.error(error);

            return res.status(500).json({ message: "Error ao buscar todos os clientes." });
        }
    },
    show: async (req: Request, res: Response) => {
        try {
            return ClientService.findClientById(req, res);
        } catch (error) {
            console.warn("Error ao buscar cliente.");
            console.error(error);

            return res.status(500).json({ message: "Error ao buscar cliente." });
        }
    },
    store: async (req: Request, res: Response) => {


    },
    update: async (req: Request, res: Response) => {


    },
    delete: async (req: Request, res: Response) => {


    },
};