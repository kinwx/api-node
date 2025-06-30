import { AbstractRepository } from "@src/helpers/AbstractRepository";
import Category, { CategoryAttributes, CategoryCreationAttributes } from "@src/models/Category/category";

export class AddressRepository extends AbstractRepository<
    Category,
    CategoryAttributes,
    CategoryCreationAttributes
> {
    constructor() {
        super(Category);
    }
}

export default new AddressRepository();
