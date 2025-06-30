import { AbstractRepository } from "@src/helpers/AbstractRepository";
import Product, { ProductAttributes, ProductCreationAttributes } from "@src/models/Product/product";

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