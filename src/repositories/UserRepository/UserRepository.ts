import { AbstractRepository } from "@src/helpers/AbstractRepository";
import User, { UserAttributes, UserCreationAttributes } from "@src/models/User/User";

export class UserRepository extends AbstractRepository<
    User,
    UserAttributes,
    UserCreationAttributes
> {
    constructor() {
        super(User);
    }

    async findByEmail(id: number | string) {
        return this.model.findOne({ where: { id } })
    }
}

export default new UserRepository();