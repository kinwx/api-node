import { AbstractRepository } from "@src/helpers/AbstractRepository";
import Order, { OrderAttributes, OrderCreationAttributes } from "@src/models/Order/order";

export class OrderRepository extends AbstractRepository<
    Order,
    OrderAttributes,
    OrderCreationAttributes
> {
    constructor() {
        super(Order);
    }
}

export default new OrderRepository();