import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "@src/config/db";
import Category from "../Category/category";

export interface ProductAttributes {
    id: number;
    name: string;
    price: number;
    storage: number;
    category_id: number;
}

export interface ProductCreationAttributes extends Optional<ProductAttributes, "id"> { }

export class Product
    extends Model<ProductAttributes, ProductCreationAttributes>
    implements ProductAttributes {
    public id!: number;
    public name!: string;
    public price!: number;
    public storage!: number;
    public category_id!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Product.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        storage: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "categories",
                key: "id",
            },
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        },
    },
    {
        sequelize,
        modelName: "Product",
        tableName: "products",
        timestamps: true,
    }
);

Product.belongsTo(Category, { foreignKey: "category_id", as: "category" });

export default Product;
