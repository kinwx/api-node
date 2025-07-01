import ClientRepository from "../../repositories/ClientRepository/ClientRepository.js";
import { Request } from "express";

export default {
  async findAll() {
    return await ClientRepository.findAll();
  },
  async findClientById(req: Request) {
    const { id } = req.params;

    const client = await ClientRepository.findById(id);
    if (!client) throw new Error();

    return client;
  },
  async createClient(req: Request) {
    const { name, email, phone } = req.body;

    const client = await ClientRepository.create({ name, email, phone });

    return client;
  },
  async updateClient(req: Request) {
    const { id } = req.params;
    const { name, email, phone } = req.body;

    const client = await ClientRepository.findById(id);
    if (!client) throw new Error();

    await client.update({ name, email, phone });

    return client.reload();
  },
  async deleteClient(req: Request) {
    const { id } = req.params;

    const client = await ClientRepository.findById(id);
    if (!client) throw new Error();

    await client.destroy();

    return true;
  },
};
