import { AbstractRepository } from "../../helpers/AbstractRepository/index.js";
import Category, {
  CategoryAttributes,
  CategoryCreationAttributes,
} from "../../models/Category/category.js";

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
