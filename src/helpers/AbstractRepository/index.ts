// src/repositories/AbstractRepository.ts
import { Model, ModelCtor, FindOptions } from "sequelize";

export abstract class AbstractRepository<
    TModel extends Model<TAttributes, TCreationAttributes>,
    TAttributes extends {},
    TCreationAttributes extends {}
> {
    protected model: ModelCtor<TModel>;

    constructor(model: ModelCtor<TModel>) {
        this.model = model;
    }

    async findAll(options?: FindOptions<TAttributes>): Promise<TModel[]> {
        return this.model.findAll(options);
    }

    async findById(id: number | string): Promise<TModel | null> {
        return this.model.findByPk(id);
    }

    async create(data: TCreationAttributes): Promise<TModel> {
        return this.model.create(data as any);
    }

    async updateById(id: number | string, data: Partial<TAttributes>): Promise<[number]> {
        return this.model.update(data, { where: { id } as any });
    }

    async deleteById(id: number | string): Promise<number> {
        return this.model.destroy({ where: { id } as any });
    }
}
