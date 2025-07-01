import { AbstractRepository } from "../../helpers/AbstractRepository/index.js";
import Product, {
  ProductAttributes,
  ProductCreationAttributes,
} from "../../models/Product/product.js";

export class ProductRepository extends AbstractRepository<
  Product,
  ProductAttributes,
  ProductCreationAttributes
> {
  constructor() {
    super(Product);
  }
}

export default new ProductRepository();
