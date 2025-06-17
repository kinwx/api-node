import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "@src/config/db";
import { Client } from "../Client/client";

export interface AddressAttributes {
    id: number;
    client_id: number;
    street: string;
    city: string;
    state: string;
    postal_code: string;
}

export interface AddressCreationAttributes extends Optional<AddressAttributes, "id"> { }

export class Address
    extends Model<AddressAttributes, AddressCreationAttributes>
    implements AddressAttributes {
    public id!: number;
    public client_id!: number;
    public street!: string;
    public city!: string;
    public state!: string;
    public postal_code!: string;

    public readonly created_at!: Date;
    public readonly updated_ad!: Date;

    public readonly client?: Client;
}

Address.init(
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
        street: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        state: {
            type: DataTypes.STRING(2),
            allowNull: false,
        },
        postal_code: {
            type: DataTypes.STRING(9),
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: "addresses",
        timestamps: true,
    }
);

Address.belongsTo(Client, { foreignKey: "client_id", as: "client" });

export default Address;
