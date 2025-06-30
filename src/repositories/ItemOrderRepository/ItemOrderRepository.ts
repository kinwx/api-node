import { AbstractRepository } from "@src/helpers/AbstractRepository";
import ItemOrder, { ItemOrderAttributes, ItemOrderCreationAttributes } from "@src/models/ItemOrder/itemOrder";

export class ItemOrderRepository extends AbstractRepository<
    ItemOrder,
    ItemOrderAttributes,
    ItemOrderCreationAttributes
> {
    constructor() {
        super(ItemOrder);
    }
}

export default new ItemOrderRepository();