import { AbstractRepository } from "../../helpers/AbstractRepository/index.js";
import Order, {
  OrderAttributes,
  OrderCreationAttributes,
} from "../../models/Order/order.js";

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
