import { AbstractRepository } from "@src/helpers/AbstractRepository";
import { Address, AddressAttributes, AddressCreationAttributes } from "@src/models/Address/address";

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