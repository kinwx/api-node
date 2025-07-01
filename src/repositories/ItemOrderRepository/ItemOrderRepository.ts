import { AbstractRepository } from "../../helpers/AbstractRepository/index.js";
import ItemOrder, {
  ItemOrderAttributes,
  ItemOrderCreationAttributes,
} from "../../models/ItemOrder/itemOrder.js";

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
