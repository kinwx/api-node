import { AbstractRepository } from "../../helpers/AbstractRepository/index.js";
import {
  Address,
  AddressAttributes,
  AddressCreationAttributes,
} from "../../models/Address/address.js";

export class AddressRepository extends AbstractRepository<
  Address,
  AddressAttributes,
  AddressCreationAttributes
> {
  constructor() {
    super(Address);
  }
}

export default new AddressRepository();
