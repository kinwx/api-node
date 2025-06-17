import { Model, ModelCtor, CreationAttributes } from "sequelize";

export class CustomRepository<
    TModel extends Model<any, any>
> {
    model: ModelCtor<TModel>;

    constructor(model: ModelCtor<TModel>) {
        this.model = model;
    }

    async findAll() {
        return await this.model.findAll();
    }

    async findById(id: string) {
        return await this.model.findByPk(id);
    }

    async create(data: CreationAttributes<TModel>) {
        return await this.model.create(data);
    }
}
