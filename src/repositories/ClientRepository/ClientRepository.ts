import client from "@src/models/Client/client";

export default {
    async findAll() {
        return await client.findAll();
    },
    async findClientById(id: string) {
        return await client.findByPk(id);
    }
} 