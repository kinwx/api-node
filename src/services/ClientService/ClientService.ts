import ClientRepository from "@src/repositories/ClientRepository/CLientRepository";
import { Request, Response } from "express";

export default {
    findAll(req: Request, res: Response) {
        const clients = ClientRepository.findAll()

        return res.status(200).send(clients);
    },
    findClientById(req: Request, res: Response) {
        const { id } = req.params;

        const client = ClientRepository.findClientById(id);
        if (!client)
            return res.status(404).send(client);

    }
};