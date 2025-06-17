import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "../../config/db.js";
import Client from "../Client/client.js";

export type OrderStatus =
  | "PENDENTE"
  | "APROVADO"
  | "EM ANDAMENTO"
  | "ENTREGUE"
  | "CANCELADO";

export interface OrderAttributes {
  id: number;
  client_id: number;
  status: OrderStatus;
}

export interface OrderCreationAttributes
  extends Optional<OrderAttributes, "id"> {}

export class Order
  extends Model<OrderAttributes, OrderCreationAttributes>
  implements OrderAttributes
{
  public id!: number;
  public client_id!: number;
  public status!: OrderStatus;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "clients",
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    status: {
      type: DataTypes.ENUM(
        "PENDENTE",
        "APROVADO",
        "EM ANDAMENTO",
        "ENTREGUE",
        "CANCELADO"
      ),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Order",
    tableName: "orders",
    timestamps: true,
  }
);

Order.belongsTo(Client, { foreignKey: "client_id", as: "client" });

export default Order;
