import { AbstractRepository } from "../../helpers/AbstractRepository/index.js";
import User, {
  UserAttributes,
  UserCreationAttributes,
} from "../../models/User/User.js";

export class UserRepository extends AbstractRepository<
  User,
  UserAttributes,
  UserCreationAttributes
> {
  constructor() {
    super(User);
  }

  async findByEmail(email: string) {
    return this.model.findOne({ where: { email } });
  }
}

export default new UserRepository();
