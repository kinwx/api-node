import { AbstractRepository } from "../../helpers/AbstractRepository/index.js";
import Client, {
  ClientAttributes,
  ClientCreationAttributes,
} from "../../models/Client/client.js";

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
