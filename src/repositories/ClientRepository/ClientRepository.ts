import { AbstractRepository } from "@src/helpers/AbstractRepository";
import Client, { ClientAttributes, ClientCreationAttributes } from "@src/models/Client/client";

export class ClientRepository extends AbstractRepository<
    Client,
    ClientAttributes,
    ClientCreationAttributes
> {
    constructor() {
        super(Client);
    }
}

export default new ClientRepository();