import ClientRepository from "@src/repositories/ClientRepository/ClientRepository";
import { Request, Response } from "express";

export default {
    findAll() {
        const clients = ClientRepository.findAll();

        return clients;
    },
    findClientById(req: Request, res: Response) {
        const { id } = req.params;

        const client = ClientRepository.findById(id);
        if (!client)
            throw new Error();

        return client;
    },
    async createClient(req: Request, res: Response) {
        const { name, email, phone } = req.body;

        const client = ClientRepository.create({ name, email, phone });

        return client;
    },
    async updateClient(req: Request, res: Response) {
        const { id } = req.params;
        const { name, email, phone } = req.body;

        const client = await ClientRepository.findById(id);
        if (!client)
            throw new Error();

        await client.update({ name, email, phone });

        return client;
    },
    async deleteClient(req: Request, res: Response) {
        const { id } = req.params;

        const client = await ClientRepository.findById(id);
        if (!client)
            throw new Error();

        await client.destroy();

        return true;
    }
};