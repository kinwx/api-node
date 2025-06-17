import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "@src/config/db";
import Category from "../Category/category";
import Order from "../Order/order";
import Product from "../Product/product";

export interface ItemOrderAttributes {
    id: number;
    order_id: number;
    product_id: number;
    quantity: number,
    price: number
}

export interface ItemOrderCreationAttributes extends Optional<ItemOrderAttributes, "id"> { }

export class ItemOrder
    extends Model<ItemOrderAttributes, ItemOrderCreationAttributes>
    implements ItemOrderAttributes {
    public id!: number;
    public order_id!: number;
    public product_id!: number;
    public quantity!: number;
    public price!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

ItemOrder.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        order_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "orders",
                key: "id",
            },
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "products",
                key: "id",
            },
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },

    },
    {
        sequelize,
        modelName: "Product",
        tableName: "products",
        timestamps: true,
    }
);

ItemOrder.belongsTo(Order, { foreignKey: "order_id", as: "order" });
ItemOrder.belongsTo(Product, { foreignKey: "product_id", as: "product" });

export default ItemOrder;
