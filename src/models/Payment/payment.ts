import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "@src/config/db";
import Order from "../Order/order";

export interface PaymentAttributes {
    id: number;
    order_id: number;
    value: number;
    type_payment: string;
    status_payment: string;
}

export interface PaymentCreationAttributes extends Optional<PaymentAttributes, "id"> { }

export class Payment
    extends Model<PaymentAttributes, PaymentCreationAttributes>
    implements PaymentAttributes {
    public id!: number;
    public order_id!: number;
    public value!: number;
    public type_payment!: string;
    public status_payment!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Payment.init(
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
        value: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        type_payment: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status_payment: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "Payment",
        tableName: "payments",
        timestamps: true,
    }
);

Payment.belongsTo(Order, { foreignKey: "order_id", as: "order" });

export default Payment;
