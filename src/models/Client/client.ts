import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "@src/config/db";

export interface ClientAttributes {
    id: number;
    name: string;
    email: string;
    phone: string;
}

export interface ClientCreationAttributes extends Optional<ClientAttributes, "id"> { }

export class Client
    extends Model<ClientAttributes, ClientCreationAttributes>
    implements ClientAttributes {
    public id!: number;
    public name!: string;
    public email!: string;
    public phone!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Client.init(
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
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "Client",
        tableName: "clients",
        timestamps: true,
    }
);

export default Client;
